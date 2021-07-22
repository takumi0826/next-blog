import Head from 'next/head'
import Link from 'next/link'
import { HeadTitle2, PostNote } from 'components/contents'
import { NoteProps } from 'types'
import { NextPage } from 'next'

type Props = {
  note: NoteProps[]
}

const Note: NextPage<Props> = ({ note }) => {
  return (
    <>
      <Head>
        <title>Note</title>
      </Head>
      <PostNote note={note} />
    </>
  )
}

export const getStaticProps = async () => {
  const resNote = await getNotePosts()

  // responseが無ければ404にリダイレクトする
  if (!resNote) {
    return {
      notFound: true,
    }
  }
  return {
    props: { note: resNote.contents || null },
  }
}

const getNotePosts = async () => {
  const url = 'https://microblog.microcms.io/api/v1/note'
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.MICRO_CMS_API_KEY,
    },
  })
    .then((response) => response.json())
    .catch(() => null)
  return res
}

export default Note
