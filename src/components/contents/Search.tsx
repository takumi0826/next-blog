import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type Props = {
  enterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = (props) => {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <input
          type="text"
          className="outline-none border border-gray-100 rounded-full pl-4 pr-8 py-2 text-xs w-[240px]"
          maxLength={20}
          onKeyPress={props.enterPress}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-[16px] top-[30%] hover:scale-110 transition text-gray-600"
        />
      </div>
    </div>
  )
}

export default Search
