import { api } from '@/data/api'
import { Metadata } from 'next'
import Image from 'next/image'

export interface Product {
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const data = await response.json()

  return data
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="relative hover:scale-105 transition-transform duration-500"
          src={product.image}
          width={1000}
          height={1000}
          quality={100}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center px-6 p-4 gap-8">
        <div>
          <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
          <div className="mt-1 leading-relaxed text-zinc-400">
            {product.description}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-violet-500 px-5 py-3 rounded-3xl font-semibold ">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="text-zinc-400">
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="">
          <p className="font-semibold">Tamanhos</p>
          <div className="flex justify-between mt-2 gap-2">
            <span className="bg-zinc-800 rounded-3xl p-[10px] flex justify-center items-center flex-1 h-9 w-14 border-zinc-700">
              P
            </span>
            <span className="bg-zinc-800 rounded-3xl p-[10px] flex justify-center items-center flex-1 h-9 w-14 border-zinc-700">
              M
            </span>
            <span className="bg-zinc-800 rounded-3xl p-[10px] flex justify-center items-center flex-1 h-9 w-14 border-zinc-700">
              G
            </span>
            <span className="bg-zinc-800 rounded-3xl p-[10px] flex justify-center items-center flex-1 h-9 w-14 border-zinc-700">
              GG
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="font-semibold bg-emerald-500 px-[20px] py-[10px] rounded-3xl flex items-center justify-center text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
