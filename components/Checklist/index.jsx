import Image from 'next/image'

export default function Checklist({ text }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-1/12">
          <Image src="/checklist.svg" width={30} height={30} alt="checklist" />
        </div>
        <div className="w-11/12">
          <p className="opacity-80">{text}</p>
        </div>
      </div>
    </>
  )
}
