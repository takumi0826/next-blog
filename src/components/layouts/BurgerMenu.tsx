import Link from 'next/link'

type NavProps = {
  id: number
  title: string
  url: string
}
type Props = {
  navs: NavProps[]
  open: boolean
  toggle: () => void
}

const BurgerMenu: React.FC<Props> = (props) => {
  return (
    <nav
      className={`fixed z-30 w-[300px] min-h-[100%] top-0 duration-200 bg-primary-500 py-[160px] px-[40px]
    ${props.open ? 'right-0' : 'right-[-100%]'}`}
    >
      <ul className="">
        {props.navs.map(({ title, id, url }) => {
          return (
            <li key={id} className="opacity-90 hover:opacity-100">
              <Link href={url}>
                <div
                  onClick={props.toggle}
                  className="py-[16px] block text-xl text-primary-100 tracking-widest"
                >
                  {title}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BurgerMenu
