import styles from "./YoutubePlayer.module.css"

const Trailer = ({ videoKey }:{videoKey:string}) => {
  return (
    
      <div className={styles.videoWrap}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    
  );
};
export default Trailer;
