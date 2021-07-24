type Props = {
  title: string
}
const HeadTitle2: React.FC<Props> = (props) => {
  return (
    <div className="bg-primary-700 text-center w-[240px] mx-auto">
      <h2 className="py-[8px] text-lg text-primary-100 tracking-widest">{props.title}</h2>
    </div>
  )
}

export default HeadTitle2
