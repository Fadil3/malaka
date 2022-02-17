import Button from '../Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className="mt-10">
        <div className="flex justify-between">
          <div className="w-6/12">
            <h1 className="text-white font-medium text-5xl">
              Sebuah framework CSS untuk developer yang memiliki phobia terhadap
              CSS
            </h1>
            <p className="text-base text-white mt-4 opacity-80">
              Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
              diakhiri dengan membangun sebuah website yang responsive dengan
              Tailwind CSS.
            </p>
            <Button className="mt-4 btn-shadow " variant="primary">
              <span className="flex gap-4">
                Beli Sekarang
                <Image
                  src="/arrow-right-circle.svg"
                  width={20}
                  height={20}
                  alt="logo"
                />
              </span>
            </Button>
          </div>
          <div className="-my-16 z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <Image src="/buku.png" width={522} height={800} alt="logo" />
          </div>
        </div>
      </section>
    </>
  )
}
