import Link from 'next/link'

const HeaderNav = ({ navs }) => {
  return (
    <ul className="flex justify-center items-center w-[240px] rounded-full bg-primary-700">
      {navs.map(({ id, title, url }) => {
        return (
          <li className="px-[16px]" key={id}>
            <Link href={url}>
              <a className="text-primary-100 text-[12px] leading-[32px]">
                {title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderNav
