import Image from 'next/image'
import Head from 'next/head'
import { LanguageSkill } from 'components/contents'
import { motion } from 'framer-motion'
import { ListResponse, SkillResponse } from 'types'
import { GetStaticProps, NextPage } from 'next'
import { client } from 'lib/client'

type Props = {
  skills: SkillResponse[]
}

const Profile: NextPage<Props> = ({ skills }) => {
  return (
    <>
      <Head>
        <title>プロフィール | ラピブログ</title>
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
          <div className="max-w-[460px] shadow-lg rounded-md mx-auto">
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get<ListResponse<SkillResponse>>({ endpoint: 'skill' })

  return {
    props: { skills: res.contents },
  }
}

export default Profile
