"use server";

import { API_URL } from "@/app/constants/api";
import { FormError } from "../common/form-error.interface";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export default async function login( _prevState: FormError, formData: FormData ){
  const res = await fetch(`${API_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    }
  )
  
  const parsedRes = await res.json();
  if(!res.ok){
    return { error: getErrorMessage(parsedRes) };
  }

  const setCookieHeader = res.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    
    (await cookies()).set({
      name: 'Authentication',
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
      path: '/',
      sameSite: 'lax'  
    });
  }

  redirect("/");
}