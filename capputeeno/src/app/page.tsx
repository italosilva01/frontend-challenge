import { Suspense } from 'react'
import { Metadata } from 'next'
import { Header } from '../components/Header'
import { FilterBar } from '../components/FilterBar'
import { AllProducts } from '../components/Content/AllProducts'
import { GET_INITIAL_PRODUCTS } from '../services/queries'
import { fetchGraphQLSSR } from '../utils/graphql-client'

export const metadata: Metadata = {
    title: 'Capputeeno - Produtos',
    description: 'Encontre os melhores produtos aqui',
}

export default async function Home() {
    const response = await fetchGraphQLSSR(GET_INITIAL_PRODUCTS)
    console.log(response)
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="flex flex-col gap-8 max-w-[1440px] mx-auto px-4 py-8">
                <FilterBar />
                <Suspense fallback={<div>Carregando produtos...</div>}>
                    <AllProducts initProducts={[]} />
                </Suspense>
            </main>
        </div>
    )
} 