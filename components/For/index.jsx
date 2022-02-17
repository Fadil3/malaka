import Charateristic from './Charateristic'

export default function For() {
  return (
    <>
      <section className="mt-28 flex justify-between">
        <div className="w-5/12">
          <p className="text-primary font-bold text-sm">BUKU INI UNTUK SIAPA</p>
          <p className=" font-medium text-3xl">
            Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
            designer!
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-lg opacity-80 px-8">
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>
      </section>
      <section className="mt-20 flex gap-6">
        <Charateristic
          image="/f1.png"
          title="Utility-First Framework"
          description="Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI."
        />
        <Charateristic
          image="/f2.png"
          title="Tailwind JIT Engine"
          description="JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik."
        />
        <Charateristic
          image="/f3.png"
          title="Unopinionated-Framework"
          description="Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik."
        />
      </section>
    </>
  )
}
