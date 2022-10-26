export type BookPartInList = {
  slug: string,
  name: string,
  fragments: [number, number]
}

export type Book = {
  slug: string,
  title: string,
  subtitle?: string,
  dedication?: string,
  parts: BookPartInList[]
}

export type BookContext = {
  params: {
    slug: string
  }
}

export type BookPartContext = {
  params: {
    slug: string,
    part: string
  }
}

export type BookFragmentContext = {
  params: {
    slug: string,
    part: string,
    fragment: string
  }
}
