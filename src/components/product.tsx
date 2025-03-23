import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ShoppingCart } from 'lucide-react'
// import type { ProductObject } from '@/types/products'

// type ProductProps = {
//   product: ProductObject
// }

const Product = () => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative" />
      <CardHeader>
        <CardTitle>Premium Product</CardTitle>
        <CardDescription>High-quality product with amazing features</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">$99.99</p>
        <p className="text-sm text-muted-foreground mt-2">
          This premium product offers exceptional quality and durability. Perfect for everyday use
          with its sleek design and practical features.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Product
