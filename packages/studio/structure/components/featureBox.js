import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Feature Box')
  .schemaType('featureBox')
  .child(
    S.documentList('featureBox')
      .title('FeatureBox')
      .menuItems(S.documentTypeList('featureBox').getMenuItems())
      .filter('_type == "featureBox"')
  );