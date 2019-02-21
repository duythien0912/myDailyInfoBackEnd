import { queryType, stringArg } from 'yoga'
import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default

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

    t.field('superbuy', {
      type: 'SupperBuy',
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
