import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PostTitle1, DetailNote } from 'components/contents'
import { NoteProps } from 'types'

type Props = {
  data: NoteProps
}

const NoteArticle: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="">
        <PostTitle1 data={data} />
        {DetailNote && <DetailNote data={data} />}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://microblog.microcms.io/api/v1/note/', {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)
  const paths = res.contents.map(({ id }) => `/note/${id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id
  const res = await fetch(`https://microblog.microcms.io/api/v1/note/${id}`, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)

  return { props: { data: res } }
}

export default NoteArticle
