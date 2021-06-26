const DetailNote = ({ data }) => {
  return (
    <>
      <div
        className="detail"
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
    </>
  )
}

export default DetailNote
