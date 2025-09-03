import "./globals.css";
import Navbar from "./components/Navbar";
import "./Card.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-23">{children}</main>
      </body>
    </html>
  );
}