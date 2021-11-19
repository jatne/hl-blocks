import S from '@sanity/desk-tool/structure-builder'
import { GoPackage } from 'react-icons/go'
import featureBox from './components/featureBox'
import slider from './components/slider'
import slices from './components/slices'

export default S.listItem()
  .title('Reusable Components')
  .icon(GoPackage)
  .child(
    S.list()
      .title('Modules')
      .items([
        slider,
        featureBox,
        S.divider(),
        slices,
      ])
  )