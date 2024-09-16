import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-3 grid-rows-4 gap-6 mt-5">
      <Link
        href="/"
        className=" relative col-span-2 row-span-4 bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          width={900}
          height={900}
          alt=""
        />
        <div className="absolute flex justify-between items-center max-w-[240px] h-[48px] pl-5 p-1 bg-zinc-950 bg-opacity-90 rounded-3xl border-4 border-zinc-500 right-28 bottom-44">
          <p className="text-sm text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
            Moletom Never Stop Learning
          </p>
          <span className="bg-violet-500 px-4 py-1 rounded-3xl font-semibold flex h-full items-center justify-center">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative col-start-3 row-start-1 row-span-2 bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="hover:scale-105 transition-transform duration-500"
          src="/moletom-ai-side.png"
          width={860}
          height={860}
          alt=""
        />
        <div className="absolute flex justify-between items-center max-w-[240px] h-[48px] pl-5 p-1 bg-zinc-950 bg-opacity-90 rounded-3xl border-4 border-zinc-500 right-16 bottom-16">
          <p className="text-sm text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
            Moletom Never Stop Learning
          </p>
          <span className="bg-violet-500 px-4 py-1 rounded-3xl font-semibold flex h-full items-center justify-center">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="relative col-start-3 row-start-3 row-span-2 bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="hover:scale-105 transition-transform duration-500"
          src="/moletom-ia-p-devs.png"
          width={860}
          height={860}
          alt=""
        />
        <div className="absolute flex justify-between items-center max-w-[240px] h-[48px] pl-5 p-1 bg-zinc-950 bg-opacity-90 rounded-3xl border-4 border-zinc-500 right-16 bottom-16">
          <p className="text-sm text-zinc-100 overflow-hidden text-ellipsis whitespace-nowrap">
            Moletom Never Stop Learning
          </p>
          <span className="bg-violet-500 px-4 py-1 rounded-3xl font-semibold flex h-full items-center justify-center">
            R$129
          </span>
        </div>
      </Link>
    </div>
  )
}
