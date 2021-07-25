import { DiaryResponse } from 'types'

type Props = {
  data: DiaryResponse
}

const DetailDiary: React.FC<Props> = (props) => {
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

export default DetailDiary
