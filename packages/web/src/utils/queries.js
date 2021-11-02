const pageBlocks = `{
  name,
  "slug": slug.current,
  "imageFeatured": imageFeatured.asset->,
  content[] {
    ...,
    defined(_type == 'image') => {
      "asset": asset->
    }
  }
}`

const getAllPages = `*[_type == 'page']${pageBlocks}`

const getPageBySlug = `
  *[_type == 'page' && slug.current == $slug && slug.current != 'home']
  ${pageBlocks}
  [0]
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
    "url": '/' + linkInternal->slug.current,
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

export {
  getAllPages,
  getPageBySlug,
  getSettingsDocs,
  getMenus,
}