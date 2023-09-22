import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGoodsItem } from './types'

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Goods'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getGoods: builder.query<IGoodsItem[], string>({
      query: (limit = '') => `goods?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Goods' as const, id })),
              { type: 'Goods', id: 'LIST' },
            ]
          : [{ type: 'Goods', id: 'LIST' }],
    }),
    getGoodsById: builder.query<IGoodsItem, number>({
      query: (id) => `goods/${id}`,
    }),
    addGoodsItem: builder.mutation<IGoodsItem, IGoodsItem>({
      query: (body) => ({
        url: 'goods',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Goods', id: 'LIST' }],
    }),
    deleteGoodsItem: builder.mutation<IGoodsItem, number>({
      query: (id) => ({
        url: `goods/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Goods', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetGoodsQuery,
  useGetGoodsByIdQuery,
  useAddGoodsItemMutation,
  useDeleteGoodsItemMutation,
} = goodsApi
