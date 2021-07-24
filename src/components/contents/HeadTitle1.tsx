type Props = {
  title: string
}

const HeadTitle1: React.FC<Props> = (props) => {
  return <h1 className="tracking-widest">{props.title}</h1>
}

export default HeadTitle1
