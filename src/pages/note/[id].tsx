import 'highlight.js/styles/hybrid.css'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PostTitle1, DetailNote } from 'components/contents'
import { ListResponse, NoteResponse } from 'types'
import { client } from 'lib/client'
import cheerio from 'cheerio'
import hljs from 'highlight.js'

type Props = {
  data: NoteResponse
}

const NoteArticle: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{`${data.title} | ラピブログ`}</title>
      </Head>
      <div className="max-w-[600px] mx-auto">
        <PostTitle1 data={data} />
        {DetailNote && <DetailNote data={data} />}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get<ListResponse<NoteResponse>>({ endpoint: 'note' })
  const paths = res.contents.map(({ id }) => `/note/${id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: { data: null } }
  const id = params.id
  const res = await client.get<NoteResponse>({ endpoint: `note/${id}` })

  const $ = cheerio.load(res.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
  })
  res.body = $.html()

  return { props: { data: res } }
}

export default NoteArticle
