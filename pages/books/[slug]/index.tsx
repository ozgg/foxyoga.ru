import type { NextPage, NextPageContext } from 'next'
import Head from "next/head";
import BookTitle from "../../../components/books/BookTitle";
import BookPart from "../../../components/books/BookPart";
import { getBooks, getBook } from "../../../lib/book-handler";
import { Book, BookContext } from "../../../lib/types";
import Dedication from "../../../components/books/Dedication";

const BookPage: NextPage<{ book: Book }> = (props) => {
  const { book } = props

  return (
    <>
      <Head>
        <title>{book.title}</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={false}/>
        <Dedication text={book.dedication}/>
        {book.parts.map(part => <BookPart key={part.slug} book={book} part={part}/>)}
      </article>
    </>
  )
}

export function getStaticProps(context: BookContext) {
  const slug = context.params.slug

  return {
    props: {
      book: getBook(slug)
    }
  }
}

export function getStaticPaths() {
  const books = getBooks()

  return {
    paths: books.map(book => ({ params: { slug: book.slug } })),
    fallback: false
  }
}

export default BookPage
