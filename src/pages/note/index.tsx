import Head from 'next/head'
import { PostNote, Search } from 'components/contents'
import { client } from 'lib/client'
import { ListResponse, NoteResponse } from 'types'
import { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

type Props = {
  note: NoteResponse[]
}

const Note: NextPage<Props> = ({ note }) => {
  const [data, setData] = useState(note)

  useEffect(() => {}, [data])

  const onEnterPressFetchData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData(e.currentTarget.value)
    }
  }
  const onClickFetchData = (searchValue: string) => {
    fetchData(searchValue)
  }
  const fetchData = (str: string) => {
    if (!str.trim()) {
      return
    }
    const encodeStr = encodeURI(str)
    fetch(`https://microblog.microcms.io/api/v1/note?q=${encodeStr}`, {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json.contents)
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Head>
        <title>ノート | ラピブログ</title>
      </Head>
      <Search enterPress={onEnterPressFetchData} click={onClickFetchData} />
      <div className="mt-[40px]">
        <PostNote note={data} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get<ListResponse<NoteResponse>>({
    endpoint: 'note',
    queries: { orders: '-updatedAt' },
  })

  return {
    props: { note: res.contents },
  }
}

export default Note
