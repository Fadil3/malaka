import For from '../components/For'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Benefit from '../components/Benefit'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-dark px-20 border-b-8 h-[650px] rounded-br-[140px] pt-2 relative">
        <Hero />
      </div>

      <div className="bg-dark -mt-20 -skew-y-6 h-32 rounded-br-[130px]" />
      <div className="mx-20">
        <For />
      </div>
      <Introduction />
      <Benefit />
    </>
  )
}
