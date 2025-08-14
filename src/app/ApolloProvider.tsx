'use client'

import { ReactNode, useMemo } from 'react'
import { ApolloProvider as OriginalApolloProvider } from '@apollo/client'
import { makeApolloClient } from '../modules/apolloClient'


export default function ApolloProvider({ children }: { children: ReactNode }) {
  // 認証トークンがあればここで取得して header に付与
  const client = useMemo(() => makeApolloClient(/* token? */), [])
  return <OriginalApolloProvider client={client}>{children}</OriginalApolloProvider>
}