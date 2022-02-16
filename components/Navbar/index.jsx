import Button from '../Button'
import Logo from './Logo'
import Nav from './Nav'

export default function Navbar() {
  return (
    <>
      <nav className="sticky flex justify-between items-center bg-dark p-2">
        <Logo />
        <Nav />
        <Button href="#donwload" variant="white">
          Download
        </Button>
      </nav>
    </>
  )
}
