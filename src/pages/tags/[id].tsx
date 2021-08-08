import Head from 'next/head'
import { PostNote } from 'components/contents'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ListResponse, Category, NoteResponse } from 'types'
import { client } from 'lib/client'

type Props = {
  tags: NoteResponse[]
}

const TagsNote: NextPage<Props> = ({ tags }) => {
  return (
    <>
      <Head>
        <title>ノート | ラピブログ</title>
      </Head>
      <PostNote note={tags} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get<ListResponse<Category>>({ endpoint: 'tags' })
  const paths = res.contents.map(({ id }) => `/tags/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: { tags: null } }
  const id = params.id
  const res = await client.get<ListResponse<NoteResponse>>({
    endpoint: 'note',
    queries: {
      filters: `categorys[contains]${id}`,
      orders: '-updatedAt',
    },
  })

  return { props: { tags: res.contents } }
}
export default TagsNote
