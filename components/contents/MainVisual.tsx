import Image from 'next/image'

const MainVisual = ({ src }) => {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <Image
          className="align-top"
          src={src}
          alt="main"
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
    </>
  )
}
export default MainVisual
