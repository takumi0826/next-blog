import Image from 'next/image'
import Head from 'next/head'
import { Header, Footer } from 'components/layouts'
import {
  HeadTitle2,
  PostNote,
  PostDiary,
  MainVisual,
} from 'components/contents'

export default function Home({ note, diary }) {
  return (
    <>
      <Head>
        <title>LapiBlog</title>
        <meta name="description" content="日記と勉強したことをまとめるブログ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainVisual src={'/flower.jpg'} />
      <main className="container mx-auto py-[120px] px-[24px]">
        <section className="">
          <HeadTitle2 title="Diary" />
          <PostDiary items={diary} />
        </section>
        <section className="pt-[240px]">
          <HeadTitle2 title="Note" />
          <PostNote items={note} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const resNote = await getNotePosts()
  const resDiary = await getDiaryPosts()

  // responseが無ければ404にリダイレクトする
  if (!resNote && !resDiary) {
    return {
      notFound: true,
    }
  }
  return {
    props: { layout: 'home', note: resNote.contents, diary: resDiary.contents },
  }
}

const getNotePosts = async () => {
  const url = 'https://microblog.microcms.io/api/v1/note'
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
  const resData = res.json()
  return resData
}
const getDiaryPosts = async () => {
  const url = 'https://microblog.microcms.io/api/v1/diary'
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
  const resData = res.json()
  return resData
}