import Link from 'next/link'

type NavProps = {
  id: number
  title: string
  url: string
}
type Props = {
  navs: NavProps[]
}

const HeaderNav: React.FC<Props> = (props) => {
  return (
    <ul className="hidden sm:flex justify-center items-center w-[240px] rounded-full bg-primary-700">
      {props.navs.map(({ id, title, url }) => {
        return (
          <li className="px-[16px] opacity-90 hover:opacity-100" key={id}>
            <Link href={url}>
              <a className="text-primary-100 text-[12px] leading-[32px]">{title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderNav
