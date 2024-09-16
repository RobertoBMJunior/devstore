import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="relative hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          width={1000}
          height={1000}
          quality={100}
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center px-6 p-4 gap-8">
        <div>
          <h1 className="text-3xl font-bold leading-tight">
            Moletom Never Stop Learning
          </h1>
          <div className="mt-1 leading-relaxed text-zinc-400">
            Moletom fabricado com 88% de algodão e 12% de poliéster.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-violet-500 px-5 py-3 rounded-3xl font-semibold ">
            R$ 99
          </span>
          <span className="text-zinc-400">Em 12x s/ juros de R$8,25</span>
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
