const DetailNote = ({ data }) => {
  return (
    <>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: data.body,
        }}
      />
    </>
  );
};

export default DetailNote;
