import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
        <h1 className="font-bold text-white">The Malaka</h1>
      </div>
    </>
  )
}
