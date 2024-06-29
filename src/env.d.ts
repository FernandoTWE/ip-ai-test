interface ImportMetaEnv {
    readonly PUBLIC_PROCESIO_URL: string;
    readonly PUBLIC_IPIFY_URL: string;
    // más variables de entorno...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }