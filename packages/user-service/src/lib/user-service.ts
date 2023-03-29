import type { UserListResponse } from "../types";

export async function listUsers(): Promise<UserListResponse> {
  const listUsersRequest = new Request('https://reqres.in/api/users');
  const response = await fetch(listUsersRequest);
  return response.json();
}

export async function getUserById(id: string) {
  const userRequest = new Request(`https://reqres.in/api/users/${id}`);
  const response = await fetch(userRequest);
  return response.json();
}