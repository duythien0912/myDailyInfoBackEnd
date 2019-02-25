import { queryType, stringArg } from 'yoga'
import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

const crypto = require('crypto')

/*
type Query {
  hello(name: String!): String!
  user(name: String!): User!
}
*/
export const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: {
        name: stringArg(),
      },
      resolve: (root, { name }) => `Hello ${name}`,
    })

    t.string('trend', {
      resolve: async (root, {}) => {
        const res = await fetch('http://izfabo.com/trend.php')
        const trendData = await res.text()
        return trendData
      },
    })

    t.field('ListItemShopee', {
      type: 'ListItemShopee',
      nullable: true,

      resolve: async (root, {}) => {
        const res = await fetch(
          'https://partner.shopeemobile.com/api/v1/items/get',
          {
            method: 'POST',
            headers: {
              Authorization:
                'c77c3a37a976bc85e754591c1bd2fef88ddccb686edf629ecd8773f9367b52a0',
            },
            body: JSON.stringify({
              pagination_offset: 0,
              pagination_entries_per_page: 100,
              partner_id: 841623,
              shopid: 127678456,
              timestamp: Math.floor(Date.now() / 1000),
            }),
          },
        )
        const listItem = await res.json()
        console.log(listItem)

        return listItem
      },
    })

    t.field('ItemDetail', {
      type: 'ItemDetail',
      nullable: true,
      resolve: async (root, {}) => {
        const timeNow = 1551108721
        const bodyReq = JSON.stringify({
          item_id: 1929923732,
          partner_id: 841623,
          shopid: 127678456,
          timestamp: timeNow,
        })
        const keyH = `https://partner.shopeemobile.com/api/v1/item/get | { "item_id": 1242325179, "partner_id": 841623, "shopid": 123456, "timestamp": ${timeNow} }`
        const authKey = crypto
          .createHmac(
            'sha256',
            'cfe16e38d51808677ef7b2df94cf1e306f972a8133802ab1253e95d4ed6b9a71',
          )
          .update(keyH)
          .digest('hex')

        console.log(bodyReq, keyH, authKey)
        const res = await fetch(
          'https://partner.shopeemobile.com/api/v1/item/get',
          {
            method: 'POST',
            headers: {
              Authorization:
                'b100b319a74f41597185ba5401f0981f0a6b49ff38ef87e940f84f16284da945',
            },
            body: bodyReq,
          },
        )
        const itemDetail = await res.json()
        console.log(itemDetail)

        return itemDetail
      },
    })

    t.field('superbuy', {
      type: 'SupperBuy',
      nullable: true,

      resolve: async (root, {}) => {
        const res = await fetch(
          'https://front.superbuy.com/shoppingguide/sale-daily-new?count=50',
        )
        const superbuyData = await res.json()
        return superbuyData
      },
    })

    t.list.field('users', {
      type: 'User',
      resolve: (root, args, ctx) => {
        return ctx.data.users
      },
    })
  },
})
