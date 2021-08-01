import Head from 'next/head'
import { HeadTitle2, PostNote, PostDiary, MainVisual } from 'components/contents'
import { ListResponse, NoteResponse, DiaryResponse } from 'types'
import { GetStaticProps, NextPage } from 'next'
import { client } from 'lib/client'

type Props = {
  note: NoteResponse[]
  diary: DiaryResponse[]
}

const Home: NextPage<Props> = ({ note, diary }) => {
  return (
    <>
      <Head>
        <title>ラピブログ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainVisual src={'/flower.jpg'} />
      <main className="container mx-auto py-[120px] px-[24px]">
        <section className="">
          <HeadTitle2 title="Diary" />
          <PostDiary diary={diary} />
        </section>
        <section className="pt-[120px] md:pt-[240px]">
          <HeadTitle2 title="Note" />
          <PostNote note={note} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resNote = await client.get<ListResponse<NoteResponse>>({
    endpoint: 'note',
    queries: { orders: '-updatedAt' },
  })
  const resDiary = await client.get<ListResponse<DiaryResponse>>({
    endpoint: 'diary',
    queries: { orders: '-updatedAt' },
  })

  return {
    props: { layout: 'home', note: resNote.contents, diary: resDiary.contents },
  }
}

export default Home
