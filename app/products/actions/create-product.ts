"use server";

import { API_URL } from "@/app/common/constants/api";
import { getHeaders, post } from "../../common/util/fetch";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
  const response = await post("products", formData);
  const productImage = formData.get("image") as File;
  if(productImage instanceof File && !response.error){
    await uploadProductImage(response.data.id, productImage);
  }
  revalidateTag("products")
  return response;
}

async function uploadProductImage(productId: number, file: File){
  const formData = new FormData();
  formData.append("image", file);
  await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: "POST",
    headers: await getHeaders(),
  })
}