import { NoteResponse } from 'types'
type Props = {
  data: NoteResponse
}

const DetailNote: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
    </>
  )
}

export default DetailNote
