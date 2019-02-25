import { objectType } from 'yoga'

export const VariationsShopee = objectType({
  name: 'VariationsShopee',

  definition(t) {
    t.string('variation_sku')
    t.int('variation_id')
  },
})

export const ItemsShopee = objectType({
  name: 'ItemsShopee',
  definition(t) {
    t.string('status')
    t.string('item_sku')
    t.int('update_time')
    t.int('shopid')
    t.int('item_id')
    t.list.field('variations', {
      nullable: true,

      type: VariationsShopee,
    })
  },
})

export const ListItemShopee = objectType({
  name: 'ListItemShopee',
  definition(t) {
    t.string('request_id')
    t.boolean('more')
    t.list.field('items', {
      nullable: true,
      type: ItemsShopee,
    })
  },
})
