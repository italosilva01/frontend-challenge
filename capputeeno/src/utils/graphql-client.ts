import { baseURL } from "../services/requestion";

export async function fetchGraphQLSSR<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL ||       baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: 'no-store',
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}