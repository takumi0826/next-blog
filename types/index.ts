export type DiaryArray = {
  id: string
  title: string
  image: {
    url: string
  }
  body: string
}

export type NoteArray = {
  id: string
  title: string
  body: string
  category: [string]
}
