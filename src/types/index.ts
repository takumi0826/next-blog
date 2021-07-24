export type ListResponse<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

export type ObjResponse<T> = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  contents: T[]
}

export type DiaryResponse = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  image: {
    url: string
    width: number
    height: number
  }
  body: string
}

export type NoteResponse = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  categorys: Category[]
}

export type SkillResponse = {
  fieldId: string
  skillName: string
  icon: {
    url: string
    height: number
    width: number
  }
  content: string
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

// type eventProps = {
//   onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
//   onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
//   onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
//   (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
// }
