import { Search, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-5">
        <Link className="text-2xl font-extrabold" href="/">
          devstore
        </Link>
        <form className="flex items-center gap-3 bg-zinc-900 px-5 py-3 rounded-3xl w-[320px]">
          <Search width={20} height={20} className="text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="bg-transparent focus:outline-none placeholder-gray-500"
          />
        </form>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <ShoppingBagIcon />
          <div>Cart (3)</div>
        </div>

        <div className="w-[2px] h-4 bg-zinc-700"></div>

        <div className="flex justify-between items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/robertobmjunior.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  )
}
