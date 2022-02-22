import Image from 'next/image'

export default function Introduction() {
  return (
    <>
      <div className="flex px-20 py-24 mt-20 bg-primary justify-between">
        <div className="w-4/12 text-white">
          <p className="font-bold">BUKU INI UNTUK SIAPA</p>
          <p className="font-medium text-3xl">
            Kata Pengantar Dari Penulis Buku
          </p>
          <hr className="w-full my-10 opacity-70" />
          <div className="flex gap-4">
            <Image src="/avatar.png" width="50" height="50" alt="avatar" />
            <div className="flex flex-col">
              <p className="text-lg font-medium">Muhamad Nauval Azhar</p>
              <p className="opacity-80">@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <p className="text-white text-lg">
            &quot;Tailwind sangat memungkinkan kamu untuk membangun sebuah
            desain website yang unik dan tanpa kamu perlu menulis kode CSS
            sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan
            waktu yang lebih lama ketika membangun sebuah website dengan
            utility-first framework ketimbang dengan framework UIkit. Ya, benar.
            Karena kamu harus memikirkan desain dan mengimplementasikan desain
            tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat
            yang diberikan oleh utility-first framework, sehingga kamu dapat
            mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework
            Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah
            website responsive dengan TailwindCSS. Buku ini tidak untuk semua
            orang, setidaknya kamu memahami cara mengoperasikan komputer,
            memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah
            membangun website sebelumnya dan ingin mempelajari hal baru untuk
            meningkatkan skill. &quot;
          </p>
        </div>
      </div>
    </>
  )
}
