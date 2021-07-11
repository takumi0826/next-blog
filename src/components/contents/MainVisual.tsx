import Image from 'next/image'

type Props = {
  src: string
}
const MainVisual: React.FC<Props> = ({ src }) => {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <Image className="align-top" src={src} alt="main" layout={'fill'} objectFit={'cover'} />
      </div>
    </>
  )
}
export default MainVisual
