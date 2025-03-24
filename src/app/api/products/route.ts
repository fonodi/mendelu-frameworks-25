export const dynamic = 'force-static'

import { PRODUCTS_MOCK_DATA } from '@/constants/products'

// import type { ProductObject } from '@/types/products'

// ProductObject[]
export async function GET() {
  return Response.json(PRODUCTS_MOCK_DATA)
}
