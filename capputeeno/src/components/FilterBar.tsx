'use client'

import { useState } from 'react'

type CategoryType = 'all' | 'mugs' | 't-shirts'

export function FilterBar() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-10">
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={`hover:opacity-70 ${selectedCategory === 'all' ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Todos os produtos
                </button>
                <button
                    onClick={() => setSelectedCategory('t-shirts')}
                    className={`hover:opacity-70 ${selectedCategory === 't-shirts' ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Camisetas
                </button>
                <button
                    onClick={() => setSelectedCategory('mugs')}
                    className={`hover:opacity-70 ${selectedCategory === 'mugs' ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Canecas
                </button>
            </div>
        </div>
    )
} 