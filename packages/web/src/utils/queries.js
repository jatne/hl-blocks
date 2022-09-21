const postData = `{
  name,
  slug,
  "publishDate": coalesce(
    publishDate,
    string(_createdAt)
  ),
  content,
  excerpt,
  "imageFeatured": imageFeatured.asset->,
  "author": author[]->,
  "category": category[]->,
}`

const modules = `
  ...,
  _type == "image" => {
    "asset": asset->
  },
  _type == "featureBox" => {
    "features": @->features
  },
  _type == "slider" => {
    "slides": @->slides[] {
      ...,
      "image": image.asset->
    }
  },
  _type == "testimonials" => {
    "testimonials": *[
      ^.isActive && _type == 'testimonial'
    ]{
      name,
      company,
      text,
      "image": image.asset->
    }
  },
  _type == "postsGrid" => {
    "posts": *[
      ^.isActive && _type == 'post'
    ]
    ${postData}
    | order(publishDate desc)
  },
`

const columns = `
_type == 'columns' => {
  "content": {
    "column_1": column_1[] {
      ${modules}
    },
    "column_2": column_2[] {
      ${modules}
      _type == 'slice' => {
        "content": @->content[] {
          ${modules}
        }
      }
    },
    "column_3": column_3[] {
      ${modules}
      _type == 'slice' => {
        "content": @->content[] {
          ${modules}
        }
      }
    },
  }
},
`

const pageBlocks = `{
  name,
  "slug": slug.current,
  "imageFeatured": imageFeatured.asset->,
  content[] {
    ${modules}
    ${columns}
    _type == 'slice' => {
      "content": @->content[] {
        ${modules}
        ${columns}
      }
    }
  }
}`

const getFrontPage = `
  *[_type == 'page' && _id == 'frontPage']
  ${pageBlocks}
  [0]
`

const getPageBySlug = `
  *[_type == 'page' && slug.current == $slug && slug.current != 'home']
  ${pageBlocks}
  [0]
`

const getPostBySlug = `
  *[_type == 'post' && slug.current == $slug]
  ${postData}
  [0]
`

const getPosts = `
  *[_type == 'post'] | order(publishDate desc)
`

const getSettingsDocs = `*[_type == 'siteSettings'][0]`

const menuLinkItems = `
  linkType == "external" => {
    label,
    "url": linkExternal,
    "external": true,
  },
  linkType == "internal" => {
    "label": linkInternal->name,
    "url": '/' + linkInternal->slug.current + '/',
    "external": false,
    defined(label) => {
      label
    },
    linkInternal->_id == "frontPage" => {
      "url": "/"
    },
  }
`

const getMenus = `
  ${getSettingsDocs}
  {
    "navMenuHeader": navMenuHeader->items[],
    "navMenuFooter": navMenuFooter->items[],
  }
  {
    navMenuHeader[] {
      ${menuLinkItems}
    },
    navMenuFooter[] {
      ${menuLinkItems}
    }
  }
`

export { getFrontPage, getPageBySlug, getSettingsDocs, getMenus, getPostBySlug, getPosts }
