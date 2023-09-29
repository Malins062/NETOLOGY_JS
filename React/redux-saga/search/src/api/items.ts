import { url } from './consts';

export const getItems = async (search: string) => {
  const params = new URLSearchParams(
    {
      q: search,
    }
  );
  
  const response = await fetch(`${url}?${params}`);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
