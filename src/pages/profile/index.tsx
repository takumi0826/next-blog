import Image from 'next/image'
import Head from 'next/head'
import { LanguageSkill } from 'components/contents'
import { motion } from 'framer-motion'
import { SkillProps } from 'types'
import { NextPage } from 'next'

type Props = {
  skills: SkillProps[]
}

const Profile: NextPage<Props> = ({ skills }) => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="md:flex">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.1,
            type: 'spring',
            stiffness: 120,
          }}
        >
          <div className="max-w-[460px] bg-white shadow-lg rounded-md mx-auto">
            <Image
              className="align-top rounded-tr-md rounded-tl-md"
              src={'/lapis.png'}
              alt="ラピス"
              width={'460'}
              height={'400'}
              objectFit={'cover'}
            />
            <div className="p-[16px]">
              <dl className="mt-[8px]">
                <dt>ブログ紹介</dt>
                <dd className="text-xs mt-[8px] leading-relaxed">
                  Next.js,tailwind.css,microCMSで作成しました。
                  <br />
                  Reactを触るのは今回が初めてでしたが、なんとかブログっぽい形にすることができました。
                  これから少しずつ運用していこうと思っています。
                </dd>
              </dl>
              <dl className="mt-[16px]">
                <dt>経歴</dt>
                <dd className="text-xs mt-[8px] leading-relaxed">
                  Web制作会社で1年半コーダーとして働き、現在はバックエンドエンジニアとして業務システムを開発
                </dd>
              </dl>
            </div>
          </div>
        </motion.div>
        <div className="w-full">
          <LanguageSkill skills={skills} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const resData = await getSkillPosts()

  // responseが無ければ404にリダイレクトする
  if (!resData) {
    return {
      notFound: true,
    }
  }
  return {
    props: { skills: resData.contents || null },
  }
}

const getSkillPosts = async () => {
  const url = 'https://microblog.microcms.io/api/v1/skill'
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
  const resData = res.json()
  return resData
}

export default Profile
