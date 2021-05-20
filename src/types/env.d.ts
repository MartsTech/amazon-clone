declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    NEXTAUTH_URL: string;
    STRIPE_PUBLIC_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_SIGNING_SECRET: string;
    HOST: string;
  }
}