const PodcastsCard = ({ style, className, children }) => {
  return (
    <div style={style} className={`${className} principal__podcast__body`}>
      {children}
    </div>
  );
};

export default PodcastsCard;
