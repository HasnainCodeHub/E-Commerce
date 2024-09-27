import { type SchemaTypeDefinition } from 'sanity'
import products from './products/product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
