import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import { motion } from 'framer-motion'

const PostNote = ({ items }) => {
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
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[64px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map(({ id, title, updatedAt, category }, i) => {
        return (
          <Link href={`note/${id}`}>
            <motion.a
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[340px] mx-auto p-[16px] col-auto rounded-3xl shadow-md hover:bg-primary-100 hover:shadow-xl transition duration-300"
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
              <h2 className="font-bold pb-[16px] border-b border-gray-200 truncate">
                {title}
              </h2>
              <div className="flex mt-[8px]">
                {category.map((item) => {
                  return (
                    <div className="bg-primary-700 text-primary-100 rounded-full text-xs px-4 py-1 mr-2">
                      {item}
                    </div>
                  )
                })}
              </div>
            </motion.a>
          </Link>
        )
      })}
    </motion.div>
  )
}

export default PostNote
