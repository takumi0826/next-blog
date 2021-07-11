import { DiaryProps } from 'types'

type Props = {
  data: DiaryProps
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
