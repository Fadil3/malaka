import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-dark px-32 border-b-8 h-[750px] rounded-br-[140px] pt-2 relative">
        <Hero />
      </div>
      <div className="bg-dark -mt-20 -skew-y-6 h-32 rounded-br-[130px]"></div>
    </>
  )
}
