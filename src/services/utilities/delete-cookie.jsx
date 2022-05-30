import { setCookie } from "./set-cookie";

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
} 