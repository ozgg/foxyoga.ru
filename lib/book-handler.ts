import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import { Book, BookPartFragment, BookPartInList } from "./types";
import BookPart from "../components/books/BookPart";

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

export function getBook(slug: string): Book {
  for (let book of getBooks()) {
    if (book.slug === slug) {
      return book
    }
  }

  throw `Cannot find book "${slug}"`
}

export function getPart(book: Book, part: string): BookPartInList {
  for (let item of book.parts) {
    if (item.slug === part) {
      return item
    }
  }

  throw `Cannot find part "${part}"`
}

export function getFragment(slug: string, part: string, fragment: string): BookPartFragment|undefined {
  const bookSlug = slug.replaceAll(/[^a-z]/g, '')
  const partSlug = part.replaceAll(/[^-a-z]/g, '')
  const fragmentSlug = fragment.replaceAll(/\D/g, '')
  const data = fs.readFileSync(`${dataDirectory}/books/${bookSlug}/${partSlug}.yml`, 'utf-8')
  const parsedData = YAML.parse(data)

  return {slug: fragmentSlug, ...parsedData[fragmentSlug]}
}
