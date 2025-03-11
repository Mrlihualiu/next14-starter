import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
// import { Flex, Layout } from 'antd';
import { Inter } from 'next/font/google'
import './globals.css'

// const { Footer, Sider, Content } = Layout;
// const Footer = Layout.Footer;
// const Sider = Layout.Sider;
// const Content = Layout.Content;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '益粮嘉里',
  description: '工单填报系统',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Menu /> */}
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
