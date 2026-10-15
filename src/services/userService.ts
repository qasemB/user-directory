import type { User } from "../types/user";

interface ApiUser {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("دریافت اطلاعات کاربران با خطا مواجه شد.");
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("ساختار اطلاعات دریافتی معتبر نیست.");
  }

  const apiUsers = data as ApiUser[];

  return apiUsers.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: `https://i.pravatar.cc/160?u=${user.id}`,
    city: user.address.city,
    company: user.company.name,
    jobTitle: "Team Member",
  }));
}
