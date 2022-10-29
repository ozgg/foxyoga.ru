import type { NextPage } from 'next'
import Head from 'next/head'
import BookTitle from "../../../../components/books/BookTitle";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookPart from "../../../../components/books/BookPart";
import { Book, BookPartContext, BookPartInList } from "../../../../lib/types";
import { getBook, getBooks, getPart } from "../../../../lib/book-handler";

const BookPartPage: NextPage<{ book: Book, part: BookPartInList }> = (props) => {
  const { book, part } = props
  const title = `${book.title}: ${part.name}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book} part={part}/>
        <BookPart book={book} part={part}/>
      </article>
    </>
  )
}

export function getStaticProps(context: BookPartContext) {
  const {slug, part} = context.params
  const book = getBook(slug)

  return {
    props: {
      book,
      part: getPart(book, part)
    }
  }
}

export function getStaticPaths() {
  const books = getBooks()
  const paths: BookPartContext[] = []

  books.forEach((book) => {
    book.parts.forEach((part) => {
      paths.push({ params: { slug: book.slug, part: part.slug } })
    })
  })

  return {
    paths: paths,
    fallback: false
  }
}

export default BookPartPage
