import { NextRequest } from 'next/server'
import { createMeshHTTPHandler } from '@graphql-mesh/http'
import { getBuiltMesh } from '../.mesh' // mesh build が出力

const handler = createMeshHTTPHandler({
  baseDir: process.cwd(),
  getBuiltMesh,
})

export async function POST(req: NextRequest) {
  return handler(req as any)
}
export async function GET(req: NextRequest) {
  return handler(req as any)
}
