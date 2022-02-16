import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <div className="flex justify-between">
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
        <h1 className="font-bold">The Malaka</h1>
      </div>
    </>
  )
}
