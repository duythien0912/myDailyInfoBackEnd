/**
 * This file was automatically generated by Nexus 0.9.17
 * Do not make changes to this file directly
 */

import * as ctx from "../src/context"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  AttributesItemDetail: { // root type
    attribute_id: number; // Int!
    attribute_name: string; // String!
    attribute_type: string; // String!
    attribute_value: string; // String!
    is_mandatory: boolean; // Boolean!
  }
  Data: { // root type
    buyerAvatar: string; // String!
    buyerId: number; // Int!
    buyerName: string; // String!
    countryCode: string; // String!
    createTime: number; // Int!
    currencySymbol: string; // String!
    goodsId: string; // String!
    goodsLink: string; // String!
    goodsOrderTime: number; // Int!
    goodsPicUrl: string; // String!
    goodsPrice: string; // String!
    goodsTitle: string; // String!
    id: string; // String!
    orderState: string; // String!
    statePicUrl: string; // String!
    status: number; // Int!
    timeName: string; // String!
    updateTime: number; // Int!
    userLevel: number; // Int!
    userLevelType: string; // String!
    userName: string; // String!
  }
  ItemDetail: { // root type
    item?: NexusGenRootTypes['ItemItemDetail'] | null; // ItemItemDetail
    request_id: string; // String!
    warning: string; // String!
  }
  ItemItemDetail: { // root type
    attributes?: NexusGenRootTypes['AttributesItemDetail'][] | null; // [AttributesItemDetail!]
    category_id: number; // Int!
    cmt_count: number; // Int!
    condition: string; // String!
    create_time: number; // Int!
    currency: string; // String!
    days_to_ship: number; // Int!
    description: string; // String!
    discount_id: number; // Int!
    has_variation: boolean; // Boolean!
    images: string[]; // [String!]!
    item_id: number; // Int!
    item_sku: string; // String!
    likes: number; // Int!
    logistics?: NexusGenRootTypes['LogisticsItemDetail'][] | null; // [LogisticsItemDetail!]
    name: string; // String!
    original_price: number; // Float!
    package_height: number; // Float!
    package_length: number; // Float!
    package_width: number; // Int!
    price: number; // Float!
    rating_star: number; // Float!
    sales: number; // Int!
    shopid: number; // Int!
    size_chart: string; // String!
    status: string; // String!
    stock: number; // Int!
    update_time: number; // Int!
    views: number; // Int!
    weight: number; // Float!
    wholesales?: NexusGenRootTypes['WholesalesItemDetail'][] | null; // [WholesalesItemDetail!]
  }
  ItemsShopee: { // root type
    item_id: number; // Int!
    item_sku: string; // String!
    shopid: number; // Int!
    status: string; // String!
    update_time: number; // Int!
    variations?: NexusGenRootTypes['VariationsShopee'][] | null; // [VariationsShopee!]
  }
  ListItemShopee: { // root type
    items?: NexusGenRootTypes['ItemsShopee'][] | null; // [ItemsShopee!]
    more: boolean; // Boolean!
    request_id: string; // String!
  }
  LogisticsItemDetail: { // root type
    enabled: boolean; // Boolean!
    estimated_shipping_fee: number; // Float!
    is_free: boolean; // Boolean!
    logistic_id: number; // Int!
    logistic_name: string; // String!
  }
  Query: {};
  SupperBuy: { // root type
    data: NexusGenRootTypes['Data'][]; // [Data!]!
    msg: string; // String!
    serverTime: number; // Int!
    state: number; // Int!
  }
  User: { // root type
    id: string; // ID!
    name: string; // String!
  }
  VariationsShopee: { // root type
    variation_id: number; // Int!
    variation_sku: string; // String!
  }
  WholesalesItemDetail: { // root type
    max: number; // Int!
    min: number; // Int!
    unit_price: number; // Float!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  AttributesItemDetail: { // field return type
    attribute_id: number; // Int!
    attribute_name: string; // String!
    attribute_type: string; // String!
    attribute_value: string; // String!
    is_mandatory: boolean; // Boolean!
  }
  Data: { // field return type
    buyerAvatar: string; // String!
    buyerId: number; // Int!
    buyerName: string; // String!
    countryCode: string; // String!
    createTime: number; // Int!
    currencySymbol: string; // String!
    goodsId: string; // String!
    goodsLink: string; // String!
    goodsOrderTime: number; // Int!
    goodsPicUrl: string; // String!
    goodsPrice: string; // String!
    goodsTitle: string; // String!
    id: string; // String!
    orderState: string; // String!
    statePicUrl: string; // String!
    status: number; // Int!
    timeName: string; // String!
    updateTime: number; // Int!
    userLevel: number; // Int!
    userLevelType: string; // String!
    userName: string; // String!
  }
  ItemDetail: { // field return type
    item: NexusGenRootTypes['ItemItemDetail'] | null; // ItemItemDetail
    request_id: string; // String!
    warning: string; // String!
  }
  ItemItemDetail: { // field return type
    attributes: NexusGenRootTypes['AttributesItemDetail'][] | null; // [AttributesItemDetail!]
    category_id: number; // Int!
    cmt_count: number; // Int!
    condition: string; // String!
    create_time: number; // Int!
    currency: string; // String!
    days_to_ship: number; // Int!
    description: string; // String!
    discount_id: number; // Int!
    has_variation: boolean; // Boolean!
    images: string[]; // [String!]!
    item_id: number; // Int!
    item_sku: string; // String!
    likes: number; // Int!
    logistics: NexusGenRootTypes['LogisticsItemDetail'][] | null; // [LogisticsItemDetail!]
    name: string; // String!
    original_price: number; // Float!
    package_height: number; // Float!
    package_length: number; // Float!
    package_width: number; // Int!
    price: number; // Float!
    rating_star: number; // Float!
    sales: number; // Int!
    shopid: number; // Int!
    size_chart: string; // String!
    status: string; // String!
    stock: number; // Int!
    update_time: number; // Int!
    views: number; // Int!
    weight: number; // Float!
    wholesales: NexusGenRootTypes['WholesalesItemDetail'][] | null; // [WholesalesItemDetail!]
  }
  ItemsShopee: { // field return type
    item_id: number; // Int!
    item_sku: string; // String!
    shopid: number; // Int!
    status: string; // String!
    update_time: number; // Int!
    variations: NexusGenRootTypes['VariationsShopee'][] | null; // [VariationsShopee!]
  }
  ListItemShopee: { // field return type
    items: NexusGenRootTypes['ItemsShopee'][] | null; // [ItemsShopee!]
    more: boolean; // Boolean!
    request_id: string; // String!
  }
  LogisticsItemDetail: { // field return type
    enabled: boolean; // Boolean!
    estimated_shipping_fee: number; // Float!
    is_free: boolean; // Boolean!
    logistic_id: number; // Int!
    logistic_name: string; // String!
  }
  Query: { // field return type
    hello: string; // String!
    ItemDetail: NexusGenRootTypes['ItemDetail'] | null; // ItemDetail
    ListItemShopee: NexusGenRootTypes['ListItemShopee'] | null; // ListItemShopee
    superbuy: NexusGenRootTypes['SupperBuy'] | null; // SupperBuy
    trend: string; // String!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  SupperBuy: { // field return type
    data: NexusGenRootTypes['Data'][]; // [Data!]!
    msg: string; // String!
    serverTime: number; // Int!
    state: number; // Int!
  }
  User: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  VariationsShopee: { // field return type
    variation_id: number; // Int!
    variation_sku: string; // String!
  }
  WholesalesItemDetail: { // field return type
    max: number; // Int!
    min: number; // Int!
    unit_price: number; // Float!
  }
}

export interface NexusGenArgTypes {
  Query: {
    hello: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AttributesItemDetail" | "Data" | "ItemDetail" | "ItemItemDetail" | "ItemsShopee" | "ListItemShopee" | "LogisticsItemDetail" | "Query" | "SupperBuy" | "User" | "VariationsShopee" | "WholesalesItemDetail";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}