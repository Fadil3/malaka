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
          <p className=" text-lg opacity-80">
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
    </>
  )
}
