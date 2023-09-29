const enum FETCH_STATUS {
  PENDING = 'Передача данных...',
  IDLE = 'Успешно',
  FAILED = 'Произошла ошибка!',
}

const REQUEST_INTERVAL = 500;
type FetchStatus = FETCH_STATUS.PENDING | FETCH_STATUS.IDLE | FETCH_STATUS.FAILED; 
const url: string = import.meta.env.VITE_SERVER_URL;

export type { FetchStatus }
export { FETCH_STATUS, url, REQUEST_INTERVAL }