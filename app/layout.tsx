import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Tonny Razafimanantsoa | Full-Stack Developer",
  description: "Développeur Web, Mobile, ERP & IA",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
