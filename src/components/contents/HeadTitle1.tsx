type Props = {
  title: string
}

const HeadTitle1: React.FC<Props> = ({ title }) => {
  return <h1 className="tracking-widest">{title}</h1>
}

export default HeadTitle1
