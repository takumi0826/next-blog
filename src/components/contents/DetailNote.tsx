import { NoteProps } from 'types'
type Props = {
  data: NoteProps
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
