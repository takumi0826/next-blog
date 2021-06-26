import PostTitle1 from '../../components/contents/PostTitle1'
import DetailNote from '../../components/contents/DetailNote'

export default function Note({ data }) {
  return (
    <>
      <div className="max-w-3xl mx-auto">
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
    .catch(() => null)
  const paths = res.contents.map(({ id }) => `/note/${id}`)
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
