import { DiaryResponse } from 'types'

type Props = {
  data: DiaryResponse
}

const DetailDiary: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: props.data.body,
        }}
      />
    </>
  )
}

export default DetailDiary
