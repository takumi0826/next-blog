import Head from 'next/head'
import { NextPage } from 'next'
import { HeadTitle2, PostDiary } from 'components/contents'
import { DiaryProps } from 'types'

type Props = {
  diary: DiaryProps[]
}

const Diary: NextPage<Props> = ({ diary }) => {
  return (
    <>
      <Head>
        <title>diary</title>
      </Head>
      <div className="">
        <PostDiary diary={diary} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const resDiary = await getDiaryPosts()

  // responseが無ければ404にリダイレクトする
  if (!resDiary) {
    return {
      notFound: true,
    }
  }
  return {
    props: { diary: resDiary.contents || null },
  }
}

const getDiaryPosts = async () => {
  const url = 'https://microblog.microcms.io/api/v1/diary'
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
  const resData = res.json()
  return resData
}

export default Diary
