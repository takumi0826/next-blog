import { HeaderNav, BurgerButton, BurgerMenu, BackgroundMask } from './'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const Header = () => {
  const navs = [
    { id: 1, title: 'Diary', url: '/diary' },
    { id: 2, title: 'Note', url: '/note' },
    { id: 3, title: 'Contact', url: '/contact' },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full top-[24px] fixed px-[24px] z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={'/images/vercel.svg'}
            alt="Picture of the author"
            width={141}
            height={32}
          />
        </Link>
        <HeaderNav navs={navs} />
        <BurgerButton open={open} toggle={() => setOpen(!open)} />
        <BurgerMenu navs={navs} open={open} toggle={() => setOpen(false)} />
        <BackgroundMask open={open} toggle={() => setOpen(false)} />
      </div>
    </header>
  )
}

export default Header
