import Head from 'next/head'
import { PostTitle1, DetailDiary } from 'components/contents'
import { NextPage } from 'next'
import { DiaryProps } from 'types'

type Props = {
  data: DiaryProps
}

const DiaryArticle: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="">
        <PostTitle1 data={data} />
        {DetailDiary && <DetailDiary data={data} />}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://microblog.microcms.io/api/v1/diary/', {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => [])
  const paths = res.contents.map(({ id }) => `/diary/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps({ params }) {
  const id = params.id
  const res = await fetch(`https://microblog.microcms.io/api/v1/diary/${id}`, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)

  return { props: { data: res } }
}

export default DiaryArticle
