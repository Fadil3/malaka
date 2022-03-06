import Badge from '../Badge'
import PriceCard from '../PriceCard'

export default function Pricelist() {
  const BukuDigital = {
    title: 'Buku Digital',
    price: 'Rp. 100.000',
    benefit: [
      {
        description: 'Buku Lengkap',
        isGet: true,
      },
      {
        description: 'Akses secara digital',
        isGet: true,
      },
      {
        description: 'Buku fisik',
        isGet: false,
      },
      {
        description: 'Mendapat pembaruan',
        isGet: true,
      },
      {
        description: 'Konsultasi',
        isGet: true,
      },
      {
        description: 'Dapat diunduh',
        isGet: true,
      },
    ],
  }

  const BukuFisik = {
    title: 'Buku Fisik',
    price: 'Rp. 185.000',
    benefit: [
      {
        description: 'Buku Lengkap',
        isGet: true,
      },
      {
        description: 'Akses secara digital',
        isGet: false,
      },
      {
        description: 'Buku fisik',
        isGet: true,
      },
      {
        description: 'Mendapat pembaruan',
        isGet: false,
      },
      {
        description: 'Konsultasi',
        isGet: true,
      },
      {
        description: 'Dapat diunduh',
        isGet: true,
      },
    ],
  }

  const DigiFisik = {
    title: 'Buku Digital + Fisik',
    price: 'Rp. 250.000',
    benefit: [
      {
        description: 'Buku Lengkap',
        isGet: true,
      },
      {
        description: 'Akses secara digital',
        isGet: true,
      },
      {
        description: 'Buku fisik',
        isGet: true,
      },
      {
        description: 'Mendapat pembaruan',
        isGet: true,
      },
      {
        description: 'Konsultasi',
        isGet: true,
      },
      {
        description: 'Dapat diunduh',
        isGet: true,
      },
    ],
  }
  return (
    <>
      <div className="-mt-24 bg-dark -skew-y-6 rounded-tr-3xl h-96"></div>
      <div className=" -mt-60 z-10 relative bg-dark ">
        <Badge title="Harga Buku" className="mt-10" />
        <div className="mt-5 w-7/12 mx-auto text-center">
          <p className="font-medium text-3xl text-white">
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </p>
          <p className=" opacity-80 text-lg text-white mt-2">
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </p>
        </div>
        <div className="flex w-full justify-evenly mt-10">
          <PriceCard
            title={BukuDigital.title}
            price={BukuDigital.price}
            benefit={BukuDigital.benefit}
          />
          <PriceCard
            title={BukuFisik.title}
            price={BukuFisik.price}
            benefit={BukuFisik.benefit}
          />
          <PriceCard
            title={DigiFisik.title}
            price={DigiFisik.price}
            benefit={DigiFisik.benefit}
          />
        </div>
        <div className="text-center text-white mt-5 opacity-80">
          <p>*Buku digital akan dikirimkan ke alamat email kamu</p>
          <p>*Buku fisik dikirim 7 hari setelah pemesanan</p>
        </div>
      </div>
      <div className="-mt-20 bg-dark -skew-y-6 rounded-bl-3xl h-40"></div>
    </>
  )
}
