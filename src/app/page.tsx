import { gql, useQuery } from '@apollo/client'

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
  const { data: countriesData, loading: cLoading, error: cError } = useQuery(COUNTRIES)
  console.log(countriesData)
  if (cLoading) return <div>loading…</div>
  if (cError) return <pre>{String(cError)}</pre>
  return (
    <></>
  );
}
