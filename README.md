# README
## 概要
GraphQL Meshの動作検証用リポジトリ

## 立ち上げ
```bash
$ npm install
$ npm run prebuild
$ npm run codegen
$ npm run dev
```

`http://localhost:3000/demo`にアクセス


```bash
npm run mesh
```
上記のコマンドで`http://localhost:4000/graphql`にプレイグラウンド立ち上げることが可能です

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

プレイグラウンドで上記のGQLを実行するとデータが取得できるのを確認可能