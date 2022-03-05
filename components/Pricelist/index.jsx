import Badge from '../Badge'

export default function Pricelist() {
  return (
    <>
      <div className="-mt-24 bg-dark -skew-y-6 rounded-tr-3xl h-96"></div>
      <div className=" -mt-60 z-10 relative bg-dark text-center">
        <Badge title="Harga Buku" className="mt-10" />
        <div className="mt-5 w-7/12 mx-auto">
          <p className="font-medium text-3xl text-white">
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </p>
          <p className=" opacity-80 text-lg text-white mt-2">
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </>
  )
}
