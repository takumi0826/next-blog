import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import { motion } from 'framer-motion'
import { DiaryProps } from 'types'

type Props = {
  diary: DiaryProps[]
}

const PostDiary: React.FC<Props> = ({ diary }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-[64px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {diary.map(({ id, title, updatedAt, image }) => {
        return (
          <Link key={id} href={`diary/${id}`}>
            <motion.a
              key={id}
              variants={item}
              className="col-auto rounded-3xl shadow-md bg-white hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <Image
                src={image.url}
                width={560}
                height={480}
                objectFit={'cover'}
                className="rounded-tl-3xl rounded-tr-3xl align-bottom hover:scale-[1.1] duration-300"
              />
              <div className="px-[16px] pt-[8px] pb-[32px]">
                <div className="flex items-center justify-end">
                  <div className="mr-1">
                    <Image
                      src={'/icon-time.svg'}
                      alt={'Picture of the author'}
                      width={12}
                      height={12}
                    />
                  </div>
                  <Moment className="text-gray-300 text-xs" format="YYYY/MM/DD">
                    {updatedAt}
                  </Moment>
                </div>
                <p className="truncate">{title}</p>
              </div>
            </motion.a>
          </Link>
        )
      })}
    </motion.div>
  )
}

export default PostDiary
