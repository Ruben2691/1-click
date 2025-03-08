import './css/style.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: "1 Click Consultants",
  description: "Empowering organizations with transformative services",
  icons: {
    icon: "../public/images/favicon.ico", // This points to the favicon inside the `public/` folder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="../public/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
