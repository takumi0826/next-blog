import { NoteResponse } from 'types'

type Props = {
  data: NoteResponse
}

const DetailNote: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="prose prose-sm"
        dangerouslySetInnerHTML={{
          __html: props.data.body,
        }}
      />
    </>
  )
}

export default DetailNote
