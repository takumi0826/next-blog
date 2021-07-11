import React from 'react'
import Image from 'next/image'
import { HeadTitle2 } from 'components/contents'
import { motion } from 'framer-motion'
import { SkillProps } from 'types'

type Props = {
  skills: SkillProps[]
}

const LanguageSkill: React.FC<Props> = ({ skills }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <>
      <div className="mt-[64px] md:mt-0 md:ml-[96px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', delay: 0.8, duration: 0.2 }}
        >
          <HeadTitle2 title={'スキル'} />
        </motion.div>
        <motion.div className="mt-[32px]" variants={container} initial="hidden" animate="visible">
          {skills &&
            skills.map(({ skillName, icon, content }) => {
              return (
                <motion.div
                  key={skillName}
                  variants={item}
                  className="flex px-[24px] py-[16px] border-b border-gray-200 min-h-[132px]"
                >
                  <div className="max-w-[56px] self-center">
                    <Image
                      className="align-top"
                      src={icon.url}
                      alt={skillName}
                      width={icon.width}
                      height={icon.height}
                      objectFit={'cover'}
                    />
                  </div>
                  <div className="w-full ml-[24px]">
                    <h3 className="text-lg">{skillName}</h3>
                    <p
                      className="text-xs mt-[8px]"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
        </motion.div>
      </div>
    </>
  )
}

export default LanguageSkill
