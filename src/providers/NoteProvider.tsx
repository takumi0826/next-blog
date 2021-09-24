import { client } from 'lib/client'
import { createContext } from 'react'
import { ListResponse, NoteResponse } from 'types'

export const NoteContext = createContext({})

const res = client.get<ListResponse<NoteResponse>>({
  endpoint: 'note',
  queries: { orders: '-updatedAt' },
})

const NoteProvider: React.FC = (props) => {
  const { children } = props
  return <NoteContext.Provider value={res}>{children}</NoteContext.Provider>
}

export default NoteProvider
