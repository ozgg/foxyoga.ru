import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AdjacentFragments from "../../../../components/books/AdjacentFragments";
import BookFragment from "../../../../components/books/BookFragment";
import AdjacentParts from "../../../../components/books/AdjacentParts";
import BookTitle from "../../../../components/books/BookTitle";

const BookFragmentPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>part.long_title, фрагмент fragment.slug</title>
      </Head>

      <article className="book">
        <BookTitle/>
        <AdjacentParts/>

        <section className="part">
          <h1><Link href={`/books/slug/part`}>part.name</Link></h1>

          <AdjacentFragments/>
          <BookFragment/>
          <AdjacentFragments/>
        </section>
      </article>
    </>
  )
}

export default BookFragmentPage
