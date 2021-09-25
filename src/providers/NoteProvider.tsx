import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'
import { NoteResponse } from 'types'

type NoteContextType = {
  note: NoteResponse[] | null
  setNote: Dispatch<SetStateAction<NoteResponse[]>>
}

export const NoteContext = createContext({} as NoteContextType)

const NoteProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [note, setNote] = useState<NoteResponse[]>([])

  return <NoteContext.Provider value={{ note, setNote }}>{children}</NoteContext.Provider>
}

export default NoteProvider
