const PostTitle1 = ({ data }) => {
  return (
    <h2 className="py-[8px] pl-[16px] border-l-4 border-primary-700 text-2xl tracking-widest">
      {data.title}
    </h2>
  )
}

export default PostTitle1
