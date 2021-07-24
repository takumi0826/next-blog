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
