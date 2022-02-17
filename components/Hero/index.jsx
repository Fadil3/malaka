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
            <div className="flex items-center gap-6 mt-4">
              <Button className=" btn-shadow " variant="primary">
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
              <div className="-mt-6">
                <Image
                  src="/download.svg"
                  width={24}
                  height={24}
                  alt="download"
                />
              </div>
              <div className="">
                <p className="text-base opacity-60 text-white">SUDAH TERJUAL</p>
                <p className="font-semibold text-2xl text-white">501,234+</p>
              </div>
            </div>
            <p className="text-white opacity-40 mt-8">
              Teknologi yang digunakan
            </p>
            <div className="flex gap-4 mt-2">
              <Image src="/html.svg" width={30} height={30} alt="logo" />
              <Image src="/css.svg" width={30} height={30} alt="logo" />
              <Image src="/firefox.svg" width={30} height={30} alt="logo" />
              <Image src="/sublime.svg" width={30} height={30} alt="logo" />
              <Image src="/terminal.svg" width={30} height={30} alt="logo" />
              <Image src="/nodejs.svg" width={30} height={30} alt="logo" />
              <Image src="/yarn.svg" width={30} height={30} alt="logo" />
              <Image src="/npm.svg" width={30} height={30} alt="logo" />
            </div>
          </div>
          <div className="-my-16 z-10 drop-shadow-[10px_20px_15px_rgba(0,0,0,0.6)]">
            <Image src="/buku.png" width={522} height={800} alt="logo" />
          </div>
        </div>
      </section>
    </>
  )
}
