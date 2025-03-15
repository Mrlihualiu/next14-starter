import Footer from '@/components/footer/Footer'
import SlierMenu from '@/components/menu/Menu'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '益粮嘉里',
  description: '工单填报系统',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrap">
          <div className='slider-menu'>
            <SlierMenu />
          </div>
          <div className='container'>
            <main className="main">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
