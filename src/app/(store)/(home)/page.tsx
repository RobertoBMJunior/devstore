import { api } from '@/data/api'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })
  const data = await response.json()

  return data
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [firstProduct, ...otherProducts] = await getFeaturedProducts()
  // const [firstProduct, secondProduct, thirdProduct] =
  //   await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-3 grid-rows-4 gap-6 mt-5">
      <Link
        href={`/product/${firstProduct.slug}`}
        className=" relative col-span-2 row-span-4 bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="hover:scale-105 transition-transform duration-500"
          src={firstProduct.image}
          width={900}
          height={900}
          alt=""
        />
        <div className="absolute flex justify-between items-center max-w-[240px] h-[48px] pl-5 p-1 bg-zinc-950 bg-opacity-90 rounded-3xl border-4 border-zinc-500 right-28 bottom-44">
          <p className="text-sm text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
            {firstProduct.title}
          </p>
          <span className="bg-violet-500 px-4 py-1 rounded-3xl font-semibold flex h-full items-center justify-center">
            {firstProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="relative col-start-3 row-span-2 bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              className="hover:scale-105 transition-transform duration-500"
              src={product.image}
              width={860}
              height={860}
              alt=""
            />
            <div className="absolute flex justify-between items-center max-w-[240px] h-[48px] pl-5 p-1 bg-zinc-950 bg-opacity-90 rounded-3xl border-4 border-zinc-500 right-16 bottom-16">
              <p className="text-sm text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
                {product.title}
              </p>
              <span className="bg-violet-500 px-4 py-1 rounded-3xl font-semibold flex h-full items-center justify-center">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
