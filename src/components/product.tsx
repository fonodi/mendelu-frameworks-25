'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ShoppingCart, Heart, HeartOff } from 'lucide-react'
import type { ProductObject } from '@/types/products'

type ProductProps = {
  product: ProductObject
}

const Product = ({ product }: ProductProps) => {
  const [isFavourite, setIsFavourite] = useState(false)

  const toggleFavourite = () => {
    setIsFavourite((state) => !state)
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative" />
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.department}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{`${product.price}€`}</p>
        <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex gap-2">
          {isFavourite ? (
            <Button className="flex justify-center" onClick={toggleFavourite}>
              <HeartOff className="h-4 w-4" />
            </Button>
          ) : (
            <Button className="flex justify-center" onClick={toggleFavourite}>
              <Heart className="h-4 w-4" />
            </Button>
          )}

          <Button className="grow">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Product
