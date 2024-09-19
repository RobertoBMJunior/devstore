import { Skeleton } from '@/app/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid max-h-[860px] grid-cols-3 grid-rows-4 gap-6 mt-5">
      <Skeleton className="col-span-2 row-span-4 h-[900px]" />
      <Skeleton className="col-span-1 row-span-2" />
      <Skeleton className="col-span-1 row-span-2" />
    </div>
  )
}
