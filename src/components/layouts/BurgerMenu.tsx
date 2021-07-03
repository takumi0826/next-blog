import Link from 'next/link'

const BurgerMenu = ({ navs, open, toggle }) => {
  return (
    <nav
      className={`fixed z-30 w-[300px] h-[100vh] top-0 duration-200 bg-primary-500 py-[160px] px-[40px]
    ${open ? 'right-0' : 'right-[-100%]'}`}
    >
      <ul className="">
        {navs.map(({ title, id, url }) => {
          return (
            <li key={id} className="opacity-90 hover:opacity-100">
              <Link href={url}>
                <a
                  onClick={toggle}
                  className="py-[16px] block text-xl text-primary-100 tracking-widest"
                >
                  {title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BurgerMenu
