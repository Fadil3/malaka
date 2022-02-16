import NavItem from './NavItem'
import { useState } from 'react'

export default function Nav() {
  return (
    <>
      <div className="">
        <ul className="flex gap-10">
          <NavItem href="#top">Top</NavItem>
          <NavItem href="#forEveryone">For Everyone</NavItem>
          <NavItem href="#benefit">Benefit</NavItem>
          <NavItem href="#preview">Preview</NavItem>
          <NavItem href="#penulis">Penulis</NavItem>
        </ul>
      </div>
    </>
  )
}
