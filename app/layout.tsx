import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'SaudePlus - Encontre o Melhor Plano de Saúde',
  description: 'Plataforma confiável para comparar e contratar planos de saúde. Cotação personalizada de Amil, Hapvida, SulAmérica, Unimed, Bradesco e mais.',
  keywords: ['plano de saúde', 'saúde', 'seguros', 'comparação'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-neutral-50">
        {children}
      </body>
    </html>
  )
}
