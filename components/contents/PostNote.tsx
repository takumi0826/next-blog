import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'

const PostNote = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[64px]">
      {items.map(({ id, title, updatedAt, category }) => {
        return (
          <Link href={`note/${id}`}>
            <a
              key={id}
              className="max-w-[340px] p-[16px] col-auto rounded-3xl shadow-md hover:bg-primary-100 hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-end">
                <div className="mr-1">
                  <Image
                    src={'/images/icon-time.svg'}
                    alt={'Picture of the author'}
                    width={12}
                    height={12}
                  />
                </div>
                <Moment className="text-gray-300 text-xs" format="YYYY/MM/DD">
                  {updatedAt}
                </Moment>
              </div>
              <h2 className="font-bold pb-[16px] border-b border-gray-200">
                {title}
              </h2>
              <div className="flex mt-[8px] mr-[8px]">
                {category.map((item) => {
                  return (
                    <div className="bg-primary-700 text-primary-100 rounded-full text-xs px-4 py-1 mr-2">
                      {item}
                    </div>
                  )
                })}
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default PostNote
