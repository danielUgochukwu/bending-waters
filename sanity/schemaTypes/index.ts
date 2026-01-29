import { type SchemaTypeDefinition } from 'sanity'
import { news } from '@/sanity/schemaTypes/news'
import { contact } from '@/sanity/schemaTypes/contact'
import { author } from '@/sanity/schemaTypes/author'
import { category } from '@/sanity/schemaTypes/category'
import { comment } from '@/sanity/schemaTypes/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, contact, author, category, comment],
}
