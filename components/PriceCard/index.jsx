import Image from 'next/image'

export default function PriceCard({ title, price, benefit, className }) {
  return (
    <>
      <div className="bg-white w-[400px] h-[400px] p-10 rounded-xl">
        <p className=" text-primary font-medium text-base">{title}</p>
        <p className="font medium text-3xl">{price}</p>
        <div className="mt-2 flex flex-col gap-2">
          {benefit.map((item, index) => {
            return (
              <div
                className="flex items-center justify-start gap-2 text-right"
                key={index}
              >
                {item.isGet ? (
                  <Image
                    src="/checklist.svg"
                    width={20}
                    height={20}
                    alt="checklist"
                  />
                ) : (
                  <Image
                    src="/cross-mark.svg"
                    width={20}
                    height={20}
                    alt="cross-mark"
                  />
                )}

                <p className="opacity-80">{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mx-auto bg-primary text-white cursor-pointer p-2 text-center rounded-lg font-semibold w-1/2 my-8 shadow-xl">
          <p>Beli Sekarang</p>
        </div>
      </div>
    </>
  )
}
