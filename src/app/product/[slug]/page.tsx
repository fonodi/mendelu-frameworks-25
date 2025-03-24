import { Progress } from '@/components/ui/progress'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="flex justify-center">
      <Progress value={33} />
      <p className="text-red-500 text-9xl font-bold">Ahoj from product page: {slug}</p>
    </div>
  )
}
