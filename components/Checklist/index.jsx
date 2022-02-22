import Image from 'next/image'

export default function Checklist({ text }) {
  return (
    <>
      <div className="flex justify-between">
        <Image src="/checklist.svg" width="30" height="30" alt="checklist" />
        <p className="opacity-80">{text}</p>
      </div>
    </>
  )
}
