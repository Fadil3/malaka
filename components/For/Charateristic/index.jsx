import Image from 'next/image'

export default function Charateristic({ title, image, description }) {
  return (
    <>
      <div className="w-4/12 text-center">
        <Image src={image} width={372} height={221} alt={title} />
        <p className="font-medium">{title}</p>
        <p className="text-base opacity-80">{description}</p>
      </div>
    </>
  )
}
