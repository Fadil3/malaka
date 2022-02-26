import Checklist from '../Checklist'
import Image from 'next/image'

export default function Benefit() {
  return (
    <>
      <div className="flex justify-between mt-24 px-20">
        <div className="w-6/12 ">
          <p className="text-primary font-bold">MANFAAT BUKU</p>
          <p className=" text-2xl font-medium">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </p>
          <p className=" text-lg opacity-80 mt-5">
            &quot;Buku itu seperti cermin: kalau yang berkaca padanya adalah
            seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah
            seorang yang jenius.&quot; - J.K Rowling
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <Checklist text="Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap" />
            <Checklist text="Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi" />
            <Checklist text="Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer" />
            <Checklist text="Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS" />
          </div>
        </div>
        <div className="w-5/12">
          <Image src="/benefit.png" alt="benefit" width={575} height={599} />
        </div>
      </div>
      <div className="flex justify-between mt-24 px-20">
        <div className="w-5/12 drop-shadow-2xl -rotate-6">
          <Image
            src="/other-benefit.png"
            alt="other-benefit"
            width={450}
            height={500}
          />
        </div>
        <div className="w-6/12 ">
          <p className="text-primary font-bold">SELAIN ITU</p>
          <p className=" text-2xl font-medium">
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </p>
          <p className=" text-lg opacity-80 mt-5">
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </p>
        </div>
      </div>
    </>
  )
}
