import Image from 'next/image'
export default function BenefitCard({ title, description, icon, className }) {
  return (
    <>
      <div
        className={`flex justify-between bg-white rounded-xl drop-shadow-xl w-full h-auto ${className} items-center p-5`}
      >
        <div className="self-start">
          <Image src={icon} width={30} height={30} alt={title} />
        </div>
        <div className="flex flex-col w-5/6 ">
          <p className="font-medium text-lg text-primary">{title}</p>
          <p className="text-base opacity-80">{description}</p>
        </div>
        <div className="cursor-pointer">
          <Image src="/arrow-benefit.svg" width={40} height={40} alt={title} />
        </div>
      </div>
    </>
  )
}
