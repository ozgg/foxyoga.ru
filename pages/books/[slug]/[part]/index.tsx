import type { NextPage } from 'next'
import Head from 'next/head'
import BookTitle from "../../../../components/books/BookTitle";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookPart from "../../../../components/books/BookPart";
import { Book, BookContext } from "../../../../lib/types";
import { getBook, getBooks } from "../../../../lib/book-hanlder";

const BookPartPage: NextPage<{ book: Book }> = (props) => {
  const { book } = props

  return (
    <>
      <Head>
        <title>part.long_title</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book}/>
        <BookPart book={book}/>
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

  const paths = books.map(book => ({ params: { slug: book.slug, part: 'part' } }))

  return {
    paths: paths,
    fallback: false
  }
}

export default BookPartPage
