import { DiaryResponse } from 'types'

type Props = {
  data: DiaryResponse
}

const DetailDiary: React.FC<Props> = ({ data }) => {
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

export default DetailDiary
