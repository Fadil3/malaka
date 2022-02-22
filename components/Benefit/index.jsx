import Checklist from '../Checklist'

export default function Benefit() {
  return (
    <>
      <div className=" mt-24">
        <p>MANFAAT BUKU</p>
        <p>Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini</p>
        <p>
          &quot;Buku itu seperti cermin: kalau yang berkaca padanya adalah
          seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah
          seorang yang jenius.&quot; - J.K Rowling
        </p>
        <div className=" mt-10">
          <Checklist text="Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap" />
        </div>
      </div>
    </>
  )
}
