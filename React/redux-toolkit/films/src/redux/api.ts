const enum FETCH_STATUS {
  PENDING = 'Передача данных...',
  IDLE = 'Успешно',
  FAILED = 'Произошла ошибка!',
}

type FetchStatus = FETCH_STATUS.PENDING | FETCH_STATUS.IDLE | FETCH_STATUS.FAILED; 

const apiKey: string = import.meta.env.VITE_API_KEY; 
const url: string = import.meta.env.VITE_SERVER_URL;

export type { FetchStatus }
export { FETCH_STATUS, url, apiKey }