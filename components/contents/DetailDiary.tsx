const DetailDiary = ({ data }) => {
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

export default DetailDiary
