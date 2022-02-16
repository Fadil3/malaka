import { useRouter } from 'next/router'
export default function NavItem({ children, href }) {
  // check if current #href is the same as the href prop
  const router = useRouter()
  const isActive = router.pathname === href

  // if the current page is the same as the href, set the className to active
  const className = isActive
    ? 'text-white'
    : 'text-white text-opacity-60 hover:text-opacity-100'

  return (
    <>
      <li>
        <a
          className={`${className} text-lg font-semibold transition`}
          href={href}
        >
          {children}
        </a>
      </li>
    </>
  )
}
