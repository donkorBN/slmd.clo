import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="sr-only">SLMD</span>
                <h1 className="text-2xl font-bold text-gray-900">SLMD</h1>
              </Link>
              <nav className="hidden md:ml-6 md:flex md:space-x-8">
                <Link href="/new" className="text-sm font-medium text-gray-500 hover:text-gray-900">New Arrivals</Link>
                <Link href="/women" className="text-sm font-medium text-gray-500 hover:text-gray-900">Women</Link>
                <Link href="/men" className="text-sm font-medium text-gray-500 hover:text-gray-900">Men</Link>
                <Link href="/accessories" className="text-sm font-medium text-gray-500 hover:text-gray-900">Accessories</Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <button className="text-gray-500 hover:text-gray-900 p-2 ml-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="sr-only">Account</span>
              </button>
              <button className="text-gray-500 hover:text-gray-900 p-2 ml-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="sr-only">Cart</span>
              </button>
              <div className="md:hidden ml-4">
                <button className="text-gray-500 hover:text-gray-900 p-2">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="sr-only">Open menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative bg-gray-900 text-white">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Flared Dreams Collection"
            width={1600}
            height={800}
            className="object-cover w-full h-[70vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Flared Dreams Collection</h2>
              <p className="text-xl md:text-2xl mb-8">Embrace the retro revival with our latest line</p>
              <a href="#" className="inline-block bg-white text-black px-6 py-3 text-lg font-semibold rounded hover:bg-gray-200 transition-colors duration-300">
                Shop Now
                <svg className="inline-block ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Flared Jeans", price: "$89.99" },
                { name: "Bell-Bottom Trousers", price: "$79." },
                { name: "Retro Flare Dress", price: "$109.99" },
                { name: "70s Inspired Jumpsuit", price: "$129.99" }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${product.name}`}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{product.name}</h4>
                    <p className="text-gray-600">{product.price}</p>
                    <button className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Join the SLMD Community</h3>
            <p className="mb-8">Subscribe to our newsletter for exclusive offers and style tips</p>
            <form className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-black"
              />
              <button type="submit" className="bg-white text-black px-6 py-2 rounded-r-md hover:bg-gray-200 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/new" className="hover:text-gray-300">New Arrivals</Link></li>
                <li><Link href="/women" className="hover:text-gray-300">Women</Link></li>
                <li><Link href="/men" className="hover:text-gray-300">Men</Link></li>
                <li><Link href="/accessories" className="hover:text-gray-300">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-gray-300">Our Story</Link></li>
                <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                <li><Link href="/sustainability" className="hover:text-gray-300">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
                <li><Link href="/shipping" className="hover:text-gray-300">Shipping & Returns</Link></li>
                <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>&copy; 2024 SLMD Clothing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}