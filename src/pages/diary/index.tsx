import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { PostDiary } from 'components/contents'
import { ListResponse, DiaryResponse } from 'types'
import { client } from 'lib/client'

type Props = {
  diary: DiaryResponse[]
}

const Diary: NextPage<Props> = ({ diary }) => {
  return (
    <>
      <Head>
        <title>日記 | ラピブログ</title>
      </Head>
      <PostDiary diary={diary} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get<ListResponse<DiaryResponse>>({
    endpoint: 'diary',
    queries: { orders: '-updatedAt' },
  })

  return {
    props: { diary: res.contents },
  }
}

export default Diary
