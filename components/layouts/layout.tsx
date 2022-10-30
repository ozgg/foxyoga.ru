import Link from "next/link"
import React from "react";
import Metrics from "../Metrics";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <header className="main-header">
        <nav>
          <ul>
            <li><Link href="/books">Книги</Link></li>
            <li><Link href="/about">О «Лисьей йоге»</Link></li>
          </ul>
        </nav>
      </header>
      <main id="main">{props.children}</main>
      <footer className="main-footer">
        <div className="copyright">
          <p>&#0169; foxyoga.ru 2009&ndash;2010, 2015, 2022.</p>
          <p>Все права на произведения «Лисья Йога» и «Цветы глухих улиц» принадлежат <em>Чёрному Лису</em>.</p>
          <p>Никакое воспроизведение или копирование текста не допускается без письменного согласия автора.</p>
        </div>
      </footer>
      <Metrics/>
    </>
  )
}

export default Layout
