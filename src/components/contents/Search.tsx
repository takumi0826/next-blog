import { useRouter } from 'next/dist/client/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search: React.FC = () => {
  const router = useRouter()
  const enterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim()) {
      return
    }
    if (e.key === 'Enter') {
      router.push(`/note?q=${e.currentTarget.value}`)
    }
  }
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <input
          type="text"
          className="outline-none border border-gray-100 rounded-full pl-4 pr-8 py-2 text-xs w-[240px]"
          maxLength={20}
          onKeyPress={(e) => enterPress(e)}
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
