"use client"

import { CardActionArea, CardHeader, Stack } from "@mui/material"
import { Card } from "@mui/material"
import { Typography } from "@mui/material"
import { Product as IProduct } from "./interfaces/product.interface"
import Image from "next/image"
import { API_URL } from "../common/constants/api"
import { getProductImage } from "./product-image"
import { useRouter } from "next/navigation"

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const router = useRouter()

  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card className="p-4">
        <Stack >
          <Typography variant="h4">{product.name}</Typography>
          { product.imageExists && (
            <Image 
              src={getProductImage(product.id)}
              alt="Product Image"
              width='0'
              height='0'
              className="w-full h-auto"
              sizes="100vw"
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  )
}