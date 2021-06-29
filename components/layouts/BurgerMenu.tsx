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
            <Link href={url} key={id}>
              <a onClick={toggle}>
                <li className="text-xl text-primary-100 py-[16px] tracking-widest">
                  {title}
                </li>
              </a>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default BurgerMenu
