import Head from 'next/head'
import { PostNote } from 'components/contents'
import { client } from 'lib/client'
import { ListResponse, NoteResponse } from 'types'
import { GetStaticProps, NextPage } from 'next'

type Props = {
  note: NoteResponse[]
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get<ListResponse<NoteResponse>>({ endpoint: 'note' })

  return {
    props: { note: res.contents },
  }
}

export default Note
