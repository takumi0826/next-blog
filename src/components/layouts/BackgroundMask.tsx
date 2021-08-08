type Props = {
  open: boolean
  toggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const BackgroundMask: React.FC<Props> = (props) => {
  return (
    <>
      {props.open && (
        <div
          onClick={props.toggle}
          className="duration-200 bg-gray-700 bg-opacity-80 fixed left-0 top-0 w-[100vw] min-h-[100%] z-10"
        ></div>
      )}
    </>
  )
}

export default BackgroundMask
