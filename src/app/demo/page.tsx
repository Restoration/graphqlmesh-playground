'use client';

import { gql, useQuery } from '@apollo/client'
import { useAllCountriesQuery } from "@/graphql/generated";

const COUNTRIES = gql`
  query AllCountries {
    countries {
      code
      name
      emoji
    }
  }
`



export default function Home() {
  const { data: cData, loading: cLoading, error: cError } = useAllCountriesQuery()
  // const { data: countriesData, loading: cLoading, error: cError } = useQuery(COUNTRIES)
  console.log(cData)

  if (cLoading) return <div>loading…</div>
  if (cError) return <pre>{String(cError)}</pre>
  return (
    <></>
  );
}
