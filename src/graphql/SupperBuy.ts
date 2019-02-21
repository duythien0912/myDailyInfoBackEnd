import { objectType } from 'yoga'

/*
type SupperBuy {
    state: number;
    serverTime: number;
    msg: string;
    data: DataItem[];
}
type DataItem {
    id: number;
    goodsId: string;
    goodsPicUrl: string;
    goodsTitle: string;
    goodsLink: string;
    goodsPrice: string;
    buyerId: number;
    buyerName: string;
    orderState: string;
    goodsOrderTime: number;
    status: number;
    createTime: number;
    updateTime: number;
    buyerAvatar: string;
    userLevel: number;
    userLevelType: string;
    currencySymbol: string;
    userName: string;
    timeName: string;
    countryCode: string;
    statePicUrl: string;
}
*/

export const DataItem = objectType({
  name: 'Data',
  definition(t) {
    t.string('id')
    t.string('goodsId')
    t.string('goodsPicUrl')
    t.string('goodsTitle')
    t.string('goodsLink')
    t.string('goodsPrice')
    t.int('buyerId')
    t.string('buyerName')
    t.string('orderState')
    t.int('goodsOrderTime')
    t.int('status')
    t.int('createTime')
    t.int('updateTime')
    t.string('buyerAvatar')
    t.int('userLevel')
    t.string('userLevelType')
    t.string('currencySymbol')
    t.string('userName')
    t.string('timeName')
    t.string('countryCode')
    t.string('statePicUrl')
  },
})

export const SupperBuy = objectType({
  name: 'SupperBuy',
  definition(t) {
    t.int('state')
    t.int('serverTime')
    t.string('msg')
    t.list.field('data', {
      type: DataItem,
    })
  },
})
