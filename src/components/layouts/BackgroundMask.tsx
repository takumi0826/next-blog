const BackgroundMask = ({ open, toggle }) => {
  return (
    <>
      {open && (
        <div
          onClick={toggle}
          className="duration-200 bg-gray-700 bg-opacity-80 fixed left-0 top-0 w-[100vw] min-h-[100vh] z-10"
        ></div>
      )}
    </>
  )
}

export default BackgroundMask
