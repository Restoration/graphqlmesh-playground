'use server'
import { getMeshSDK } from '../../.mesh'   // mesh build 生成物

export async function fetchTopUsers() {
  const sdk = getMeshSDK()
  const res = await sdk.users_query__topUsers({ limit: 10 }) // Operation 名に応じた型付メソッド
  return res
}