import { url } from './consts';

export const getItems = async (id?: string) => {
  
  const response = await fetch(id ? `${url}${id}` : url);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
