import Head from 'next/head'
import { PostTitle1, DetailNote } from '../../components/contents'

export default function Note({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="max-w-lg mx-auto">
        <PostTitle1 data={data} />
        {DetailNote && <DetailNote data={data} />}
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://microblog.microcms.io/api/v1/note/', {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => [])
  const paths = (res.contents || []).map(({ id }) => `/note/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export async function getStaticProps({ params }) {
  const id = params.id
  const res = await fetch(`https://microblog.microcms.io/api/v1/note/${id}`, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)

  return { props: { data: res } }
}
