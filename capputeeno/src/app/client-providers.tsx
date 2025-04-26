'use client'
import { ProductProvider } from "../../styles/context/ProductContext"
import { ShoppingCarProvider } from "../hooks/shoppingCar"

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProductProvider>
            <ShoppingCarProvider>
                {children}
            </ShoppingCarProvider>
        </ProductProvider>
    )
}
