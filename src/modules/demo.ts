import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../graphql/generated'

const client = new GraphQLClient('/api/graphql')
const sdk = getSdk(client)

export async function demo() {
  const a = await sdk.AllCountries()
  console.log(a.countries?.length)
}