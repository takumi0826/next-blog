import Head from 'next/head'
import Link from 'next/link'
import { HeadTitle2, PostNote } from 'components/contents'
import { NoteArray } from 'types'

// type noteProps = {
//   note: NoteArray[]
// }

export default function Note({ note }) {
  return (
    <>
      <Head>
        <title>Note</title>
      </Head>
      <div className="">
        <PostNote key={note} items={note} />
      </div>
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
