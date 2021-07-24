import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'microblog',
  apiKey: process.env.MICRO_CMS_API_KEY as string,
})
