import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              We provide high-quality products with exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              123 Commerce Street
              <br />
              City, State 12345
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mendelu webshop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
