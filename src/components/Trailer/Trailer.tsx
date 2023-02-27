const Trailer = ({ videoKey }:{videoKey:string}) => {
  return (
    <>
      <iframe
        width="290"
        height="180"
              src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
export default Trailer;
