const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  // eslint-disable-next-line no-console
  console.warn('VITE_API_URL is not defined. API requests may fail.');
}

export const API_URL = apiUrl || '';
