import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaFields extends Schema.Component {
  collectionName: 'components_seo_meta_fields';
  info: {
    displayName: 'Meta fields';
    icon: 'search';
  };
  attributes: {
    seo_title: Attribute.String;
    seo_description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-fields': SeoMetaFields;
    }
  }
}
