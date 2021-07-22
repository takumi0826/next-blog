export type DiaryProps = {
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

export type NoteProps = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  body: string
  categorys: Category[]
}

export type SkillProps = {
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
  name: string
}
