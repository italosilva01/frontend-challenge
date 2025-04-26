'use client'

import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useShoppingCar } from '../hooks/shoppingCar'

export function Header() {
    const { productsShoppingCar } = useShoppingCar()

    return (
        <header className="bg-white w-full">
            <div className="max-w-[1440px] mx-auto h-[80px] flex items-center justify-between px-4">
                <Link href="/" className="text-2xl font-bold">
                    capputeeno
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/cart"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <ShoppingBag className="h-6 w-6" />
                        <span className="text-sm">
                            {productsShoppingCar?.length} items
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
} 