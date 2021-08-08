import Head from 'next/head'
import { PostTitle1, DetailDiary } from 'components/contents'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ListResponse, DiaryResponse } from 'types'
import { client } from 'lib/client'

type Props = {
  data: DiaryResponse
}

const DiaryArticle: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | ラピブログ`}</title>
      </Head>
      <div className="max-w-[600px] mx-auto">
        <PostTitle1 data={data} />
        {DetailDiary && <DetailDiary data={data} />}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get<ListResponse<DiaryResponse>>({ endpoint: 'diary' })
  const paths = res.contents.map(({ id }) => `/diary/${id}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: { data: null } }
  const id = params.id
  const res = await client.get<DiaryResponse>({ endpoint: `diary/${id}` })

  return { props: { data: res } }
}

export default DiaryArticle
