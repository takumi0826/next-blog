import Image from 'next/image'
import Link from 'next/link'
import { DiaryResponse } from 'types'
import Moment from 'react-moment'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

type Props = {
  diary: DiaryResponse[]
}

const PostDiary: React.FC<Props> = (props) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: [0.1],
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])
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
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-[64px]"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {props.diary.map(({ id, title, updatedAt, image }) => {
        return (
          <Link key={id} href={`diary/${id}`}>
            <motion.a
              key={id}
              variants={item}
              className="col-auto rounded-3xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 overflow-hidden"
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
