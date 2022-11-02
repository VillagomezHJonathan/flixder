export const DOMAIN = 'https://api.themoviedb.org/3'
export const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

let DB_BASE_URL = ''

process.env.NODE_ENV === 'production'
  ? (DB_BASE_URL = 'http://localhost:3001')
  : ''
