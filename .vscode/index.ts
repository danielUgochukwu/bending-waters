import { type SchemaTypeDefinition } from 'sanity'
import { news } from '@/sanity/schemaTypes/news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news],
}
