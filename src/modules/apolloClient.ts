'use client'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

/** ブラウザから Mesh の /api/graphql を叩く */
export function makeApolloClient(token?: string) {
  return new ApolloClient({
    link: new HttpLink({
      uri: '/api/graphql',
      // Cookie を使う場合: credentials: 'include'
      // fetchOptions: { credentials: 'include' },
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    }),
    cache: new InMemoryCache(),
    // 開発中は実データ優先にしたいなら:
    // defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } }
  })
}
