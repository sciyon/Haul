interface SingleProductProps{
  params: { productId: string }
}

export default async function SingleProduct({ params }: SingleProductProps){
  return (
   <>
   Single Product {params.productId}</> 
  )
}