export const DOMAIN = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

export let DB_BASE_URL =
  process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : ''
