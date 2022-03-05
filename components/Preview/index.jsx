/* eslint-disable @next/next/no-img-element */
import Badge from '../Badge'
import SliderBook from '../SliderBook'

export default function Preview() {
  return (
    <>
      <div className="pt-28 bg-secondary text-center">
        <Badge title="PRATINJAU" className="w-1/12" />
        <div className="w-8/12 mx-auto mt-5">
          <p className=" text-4xl text-[#272D3E] font-medium">
            Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
            di dalam buku ini
          </p>
          <p className="opacity-80 mt-5">
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih{' '}
            <br />
            detail halaman buku tersebut dan membaca isinya.
          </p>
        </div>
      </div>
      <div className="px-20 pt-10 flex bg-secondary justify-evenly">
        <img src="/book-texture.svg" alt="cover" className=" h-100" />
        <div className="w-4/12 self-center">
          <SliderBook />
        </div>
      </div>
    </>
  )
}
