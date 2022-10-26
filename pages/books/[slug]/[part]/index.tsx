import type { NextPage } from 'next'
import Head from 'next/head'
import BookTitle from "../../../../components/books/BookTitle";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookPart from "../../../../components/books/BookPart";
import { Book, BookPartContext } from "../../../../lib/types";
import { getBook, getBooks } from "../../../../lib/book-handler";

const BookPartPage: NextPage<{ book: Book, part: string }> = (props) => {
  const { book, part } = props

  return (
    <>
      <Head>
        <title>part.long_title</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book}/>
        <BookPart book={book} part={book.parts.filter(i => (i.slug === part))[0]}/>
      </article>
    </>
  )
}

export function getStaticProps(context: BookPartContext) {
  const slug = context.params.slug
  const part = context.params.part

  return {
    props: {
      book: getBook(slug),
      part: part
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
