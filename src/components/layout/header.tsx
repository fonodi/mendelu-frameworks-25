import Link from 'next/link'

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">Mendelu webshop</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
