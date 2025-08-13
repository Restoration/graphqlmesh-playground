# README
## 概要
GraphQL Meshの動作検証用リポジトリ

## CLI
- npm run mesh
- npm run dev


meshコマンドで`http://localhost:4000/graphql`にプレイグラウンド立ち上げ

## GraphQL参照元
- https://countries.trevorblades.com/


サンプルクエリ
```gql
query {
  countries {
    code
    name
    emoji
    continent {
      name
    }
  }
}
```