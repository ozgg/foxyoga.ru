import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AdjacentFragments from "../../../../components/books/AdjacentFragments";
import BookFragment from "../../../../components/books/BookFragment";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookTitle from "../../../../components/books/BookTitle";
import { Book, BookFragmentContext } from "../../../../lib/types";
import { getBook, getBooks } from "../../../../lib/book-handler";

const BookFragmentPage: NextPage<{ book: Book, part: string, fragment: string }> = (props) => {
  const { book, part, fragment } = props

  return (
    <>
      <Head>
        <title>part.long_title, фрагмент fragment.slug</title>
      </Head>

      <article className="book">
        <BookTitle book={book} link={true}/>
        <AdjacentParts book={book}/>

        <section className="part">
          <h1><Link href={`/books/${book.slug}/${part}`}>part.name</Link></h1>

          <AdjacentFragments book={book}/>
          <BookFragment/>
          <AdjacentFragments book={book}/>
        </section>
      </article>
    </>
  )
}

export function getStaticProps(context: BookFragmentContext) {
  const slug = context.params.slug

  return {
    props: {
      book: getBook(slug),
      part: context.params.part,
      fragment: context.params.fragment
    }
  }
}

export function getStaticPaths() {
  const books = getBooks()
  const paths: BookFragmentContext[] = []

  books.forEach(book => {
    book.parts.forEach(part => {
      for (let f = part.fragments[0]; f <= part.fragments[1]; f++) {
        paths.push({
          params: {
            slug: book.slug,
            part: part.slug,
            fragment: f.toString()
          }
        })
      }
    })
  })

  return {
    paths: paths,
    fallback: false
  }
}

export default BookFragmentPage
