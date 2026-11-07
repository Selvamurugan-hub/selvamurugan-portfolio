/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_RESUME_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
