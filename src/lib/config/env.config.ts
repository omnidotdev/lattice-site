/**
 * Environment variables.
 */
// Build-time vars take precedence to prevent SSR hydration mismatch
const env =
  typeof window === "undefined"
    ? { ...process.env, ...import.meta.env }
    : import.meta.env;

export const {
  // core
  VITE_BASE_URL: BASE_URL,
  // Feature flags
  VITE_FLAGS_API_HOST: FLAGS_API_HOST,
  VITE_FLAGS_CLIENT_KEY: FLAGS_CLIENT_KEY,
} = env;

// Startup warnings for optional integrations
if (!FLAGS_API_HOST)
  console.warn("FLAGS_API_HOST not set, feature flags disabled");
if (!FLAGS_CLIENT_KEY)
  console.warn("FLAGS_CLIENT_KEY not set, feature flags disabled");
