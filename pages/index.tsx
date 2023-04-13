import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={'navbar'}>
        <img src="logo.png" alt="small" height="80px" width="80px" />

        <div className="navbar_content">
          <a className={'active'} href="#home">
            Home
          </a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#profile">profile</a>
        </div>
      </div>

      <div className="quote_space">
        <img src="smart_home.png" alt="norway" />
        <div>
          <p>Discover the world of possibilities with smart home.</p>
        </div>
      </div>
    </main>
  )
}
