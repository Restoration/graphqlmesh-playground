// app/api/graphql/route.ts
import type { NextRequest } from 'next/server'
import { createMeshHTTPHandler } from '@graphql-mesh/http'
import { getBuiltMesh } from '../../../../.mesh'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' // EdgeではなくNode実行に固定

const meshHandler = createMeshHTTPHandler({
  baseDir: process.cwd(),
  getBuiltMesh,
})

/** NextRequest を “可変な” Web Request に変換して Mesh に渡す */
function toWebRequest(req: NextRequest): Request {
  // POST等のときだけボディを渡す（GETはnull）
  const body = req.method === 'GET' || req.method === 'HEAD' ? null : req.body

  return new Request(req.url, {
    method: req.method,
    headers: req.headers,
    body,
    // TS 的には未定義だが実行時に必要なことがある（NodeのReadableStream）
    // @ts-expect-error
    duplex: 'half',
  })
}

export async function GET(req: NextRequest) {
  return meshHandler(toWebRequest(req))
}

export async function POST(req: NextRequest) {
  return meshHandler(toWebRequest(req))
}
