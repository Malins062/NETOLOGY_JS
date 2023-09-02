/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_INTERVAL_USERS: number,
    readonly VITE_USERS_URL: string,
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }