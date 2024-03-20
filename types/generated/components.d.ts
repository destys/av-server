import type { Schema, Attribute } from '@strapi/strapi';

export interface PricesPrices extends Schema.Component {
  collectionName: 'components_prices_prices';
  info: {
    displayName: 'Prices';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    price: Attribute.BigInteger;
  };
}

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

export interface SiteBlocksIntro extends Schema.Component {
  collectionName: 'components_site_blocks_intros';
  info: {
    displayName: 'Intro';
    icon: 'arrowUp';
  };
  attributes: {
    h1: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'prices.prices': PricesPrices;
      'seo.meta-fields': SeoMetaFields;
      'site-blocks.intro': SiteBlocksIntro;
    }
  }
}
