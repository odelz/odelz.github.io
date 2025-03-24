export const FEATURES = {
    PINTEREST_ENABLED: process.env.NEXT_PUBLIC_FEATURE_PINTEREST === 'true',
  } as const
  
export const PINTEREST_CONFIG = {
clientId: process.env.NEXT_PUBLIC_PINTEREST_CLIENT_ID || '',
clientSecret: process.env.PINTEREST_CLIENT_SECRET || '',
redirectUri: process.env.NEXT_PUBLIC_PINTEREST_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/pinterest',
scope: 'boards:read,pins:read,user_accounts:read',
authUrl: 'https://www.pinterest.com/oauth/',
tokenUrl: 'https://api.pinterest.com/v5/oauth/token',
} as const