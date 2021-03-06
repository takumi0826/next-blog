import { DiaryResponse } from 'types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

type Props = {
  data: DiaryResponse
}

const DetailDiary: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="prose prose-md prose-blue"
        dangerouslySetInnerHTML={{
          __html: props.data.body,
        }}
      />
      <div className="pt-[2rem] mt-[4rem] border-t border-gray-200">
        <Link href="/diary">
          <a className="text-primary-700 text-opacity-80 hover:text-opacity-100 no-underline transition-all">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            <span className="ml-2">一覧に戻る</span>
          </a>
        </Link>
      </div>
    </>
  )
}

export default DetailDiary
