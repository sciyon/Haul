"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";
import { getErrorMessage } from "@/app/util/errors";
import { post } from "@/app/util/fetch";
import { FormError } from "../common/form-error.interface";

export default async function createUser( _prevState: FormError, formData: FormData ){
  const { error } = await post("users", formData)

  if(error){
    return { error }
  }

  redirect("/");
}