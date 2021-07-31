import { NoteResponse } from 'types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

type Props = {
  data: NoteResponse
}

const DetailNote: React.FC<Props> = (props) => {
  return (
    <>
      <div
        className="prose prose-md"
        dangerouslySetInnerHTML={{
          __html: props.data.body,
        }}
      />
      <div className="pt-[2rem] mt-[4rem] border-t border-gray-200">
        <Link href="/note">
          <a className="text-primary-700 text-opacity-80 hover:text-opacity-100 no-underline transition-all">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
            <span className="ml-2">一覧に戻る</span>
          </a>
        </Link>
      </div>
    </>
  )
}

export default DetailNote
