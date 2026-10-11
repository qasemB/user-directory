import type { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const response = await fetch("/users.json");

  if (!response.ok) {
    throw new Error("دریافت اطلاعات کاربران با خطا مواجه شد.");
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("ساختار اطلاعات کاربران معتبر نیست.");
  }

  return data as User[];
}
