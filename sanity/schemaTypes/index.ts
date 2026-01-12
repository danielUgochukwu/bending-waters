import { type SchemaTypeDefinition } from 'sanity'
import { news } from '@/sanity/schemaTypes/news'

import { contact } from '@/sanity/schemaTypes/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, contact],
}
