type Props = {
  data: {
    title: string
  }
}

const PostTitle1: React.FC<Props> = (props) => {
  return (
    <h1 className="py-[8px] pl-[16px] mb-[64px] border-l-4 border-primary-700 text-3xl tracking-widest">
      {props.data.title}
    </h1>
  )
}

export default PostTitle1
