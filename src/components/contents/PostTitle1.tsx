const PostTitle1 = ({ data }) => {
  return (
    <h1 className="py-[8px] pl-[16px] mb-[64px] border-l-4 border-primary-700 text-3xl tracking-widest">
      {data.title}
    </h1>
  )
}

export default PostTitle1
