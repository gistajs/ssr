import path from 'path'

const dbName = 'dev.db'
export const dbPath = path.join(process.cwd(), 'data', dbName)

const url = process.env.DB_URL || `file:${dbPath}`
const authToken = process.env.DB_AUTH_TOKEN

export const dbCredentials = authToken ? { url, authToken } : { url }
