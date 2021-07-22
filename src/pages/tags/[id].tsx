import Head from 'next/head'
import { PostNote } from 'components/contents'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NoteProps } from 'types'

type Props = {
  tags: NoteProps[]
}

const TagsNote: NextPage<Props> = ({ tags }) => {
  return (
    <>
      <PostNote note={tags} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://microblog.microcms.io/api/v1/tags/', {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)
  const paths = res.contents.map(({ id }) => `/tags/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id
  const res = await fetch(
    `https://microblog.microcms.io/api/v1/note?filters=categorys[contains]${id}`,
    {
      headers: {
        'X-API-KEY': process.env.MICRO_CMS_API_KEY,
      },
    },
  )
    .then((response) => response.json())
    .catch(() => null)

  return { props: { tags: res.contents } }
}
export default TagsNote
