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

const getPageBySlug = `*
  [_type == 'page' && slug.current == $slug && slug.current != 'home']
  ${pageBlocks}[0]`

export {
  getAllPages,
  getPageBySlug,
}