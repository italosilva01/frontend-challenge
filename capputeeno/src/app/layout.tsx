'use client'
import './globals.css'
import { ProductProvider } from '../../styles/context/ProductContext'
import { ShoppingCarProvider } from '../hooks/shoppingCar'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className="font-sans">
                <ProductProvider>
                    <ShoppingCarProvider>
                        {children}
                    </ShoppingCarProvider>
                </ProductProvider>
            </body>
        </html>
    )
} 