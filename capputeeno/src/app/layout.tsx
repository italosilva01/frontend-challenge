import './globals.css'

import { Metadata } from 'next'
import { ClientProviders } from './client-providers'

export const metadata: Metadata = {
    title: 'Capputeeno - Produtos',
    description: 'Encontre os melhores produtos aqui',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className="font-sans">
                <ClientProviders>
                    {children}
                </ClientProviders>
            </body>
        </html>
    )
} 