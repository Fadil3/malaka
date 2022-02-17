import Button from '../Button'
import Logo from './Logo'
import Nav from './Nav'

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center bg-dark px-32 py-5">
        <Logo />
        <Nav />
        <Button href="#donwload" variant="white">
          Download
        </Button>
      </nav>
    </>
  )
}
