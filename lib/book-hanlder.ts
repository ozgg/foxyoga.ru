import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import { Book } from "./types";

const dataDirectory = path.join(process.cwd(), 'data')

export function getBooks(): Book[] {
  const books: Book[] = []
  const data = fs.readFileSync(`${dataDirectory}/books.yml`, 'utf-8')
  const parsedData = YAML.parse(data)
  for (let slug in parsedData) {
    books.push({ slug: slug, ...parsedData[slug] })
  }

  return books;
}

export function getBook(slug: string): Book|null {
  let result: Book|null = null

  getBooks().forEach((book: Book) => {
    if (book.slug === slug) {
      result = book
    }
  })

  return result
}
