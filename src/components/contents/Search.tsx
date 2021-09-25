import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

type Props = {
  enterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  click: (e: string) => void
}

const Search: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const handleOnChange = (e: string) => {
    setSearchValue(e)
  }

  return (
    <div className="text-center">
      <div className="relative inline-block">
        <input
          type="text"
          className="outline-none border border-gray-100 rounded-full pl-4 pr-8 py-2 sm:text-xs w-[240px]"
          maxLength={20}
          onChange={(e) => handleOnChange(e.currentTarget.value)}
          onKeyPress={props.enterPress}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-[16px] top-[30%] hover:scale-110 transition text-gray-600"
          onClick={() => props.click(searchValue)}
        />
      </div>
    </div>
  )
}

export default Search
