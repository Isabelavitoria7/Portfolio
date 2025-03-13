import type { Metadata } from "next";
import "./globals.css";
import {Header} from "../components/header"

export const metadata: Metadata = {
  title: "Portfólio",
  description:"Portfólio",
  openGraph:{
    title: 'Veja meu portfólio'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index:true,
      follow:true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body
        className="antialiased"
      >
        {/* aqui no layout children é a pasta renderizada atualmente, header ou qualquer coisa que eu colocar aqui vai aparecer e todas as páginas */}
        <Header/>
        {children} 
 
      </body>
    </html>
  );
}
