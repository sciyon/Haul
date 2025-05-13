"use server";

import { API_URL } from "@/app/common/constants/api";
import { redirect } from "next/navigation";
import { getErrorMessage } from "@/app/common/util/errors";
import { post } from "@/app/common/util/fetch";
import { FormResponse } from "../../common/form-response.interface";

export default async function createUser( _prevState: FormResponse, formData: FormData ){
  const { error } = await post("users", formData)

  if(error){
    return { error }
  }

  redirect("/");
}