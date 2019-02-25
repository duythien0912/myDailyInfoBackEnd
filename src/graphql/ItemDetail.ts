import { objectType } from 'yoga'

export const AttributesItemDetail = objectType({
  name: 'AttributesItemDetail',

  definition(t) {
    t.string('attribute_name')
    t.string('attribute_value')
    t.string('attribute_type')
    t.boolean('is_mandatory')
    t.int('attribute_id')
  },
})

export const WholesalesItemDetail = objectType({
  name: 'WholesalesItemDetail',
  definition(t) {
    t.int('min')
    t.int('max')
    t.float('unit_price')
  },
})

export const LogisticsItemDetail = objectType({
  name: 'LogisticsItemDetail',
  definition(t) {
    t.string('logistic_name')
    t.boolean('is_free')
    t.int('logistic_id')
    t.boolean('enabled')
    t.float('estimated_shipping_fee')
  },
})

export const ItemItemDetail = objectType({
  name: 'ItemItemDetail',
  definition(t) {
    t.list.string('images')
    t.string('currency')
    t.string('status')
    t.string('condition')
    t.string('name')
    t.string('description')
    t.string('item_sku')
    t.string('size_chart')
    t.float('original_price')
    t.int('package_width')
    t.int('cmt_count')
    t.float('weight')
    t.int('shopid')
    t.int('create_time')
    t.int('likes')
    t.int('days_to_ship')
    t.float('package_length')
    t.int('stock')
    t.int('update_time')
    t.int('views')
    t.float('price')
    t.int('sales')
    t.int('discount_id')
    t.int('item_id')
    t.float('package_height')
    t.float('rating_star')
    t.int('category_id')
    t.boolean('has_variation')
    t.list.field('wholesales', {
      nullable: true,
      type: WholesalesItemDetail,
    })
    t.list.field('logistics', {
      nullable: true,
      type: LogisticsItemDetail,
    })
    t.list.field('attributes', {
      nullable: true,
      type: AttributesItemDetail,
    })
  },
})

export const ItemDetail = objectType({
  name: 'ItemDetail',

  definition(t) {
    t.string('warning')
    t.string('request_id')
    t.field('item', {
      nullable: true,

      type: ItemItemDetail,
    })
  },
})
