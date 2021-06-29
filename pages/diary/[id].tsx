import Head from 'next/head'
import { PostTitle1, DetailDiary } from '../../components/contents'

export default function Diary({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="max-w-lg mx-auto">
        <PostTitle1 data={data} />
        {DetailDiary && <DetailDiary data={data} />}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://microblog.microcms.io/api/v1/diary/', {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)
  const paths = res.contents.map(({ id }) => `/diary/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps({ params }) {
  const id = params.id
  const res = await fetch(`https://microblog.microcms.io/api/v1/diary/${id}`, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)

  return { props: { data: res } }
}
