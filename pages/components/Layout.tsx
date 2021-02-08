import { defaultCipherList } from 'constants'
import { NextComponentType } from 'next'
import { ReactNode } from 'react'

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <header>Header here</header>
      {children}
      <footer>Footer Here</footer>
    </>
  )
}

export default Layout
