"use server"
import { get } from "./util/fetch"

export async function getMe() {
  return get("users/me")
}