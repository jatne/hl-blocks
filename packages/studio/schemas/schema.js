import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Docs
import page from './documents/page'
import post from './documents/post'
import author from './documents/author'
import siteSettings from './documents/siteSettings'
import navMenu from './documents/navMenu'
import category from './documents/category'
import featureBox from './documents/featureBox'
import slider from './documents/slider'
import slices from './documents/slices'
import testimonials from './documents/testimonials'

// Components
import pageBuilder from './components/pageBuilder'
import emptySpace from './components/emptySpace'
import richEditor from './components/richEditor'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // docs:
    page,
    post,
    author,
    siteSettings,
    navMenu,
    category,
    featureBox,
    slider,
    slices,
    testimonials,

    // components:
    pageBuilder,
    emptySpace,
    richEditor,
  ]),
})
