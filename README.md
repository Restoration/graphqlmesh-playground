# README
## 概要
GraphQL Meshの動作検証用リポジトリ

## 立ち上げ
```
$ npm run prebuild
$ npm run codegen
$ npm run dev
```

## プレイグラウンド
- npm run mesh

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