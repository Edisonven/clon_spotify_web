const PodcastsCard = ({ key, style, className, children }) => {
  return (
    <div
      key={key}
      style={style}
      className={`${className} principal__podcast__body`}
    >
      {children}
    </div>
  );
};

export default PodcastsCard;
