import Image from 'next/image'

const MainVisual = ({ src }) => {
  return (
    <>
      <Image
        src={src}
        alt="main"
        width={1920}
        height={1080}
        objectFit={'cover'}
      />
    </>
  )
}
export default MainVisual
