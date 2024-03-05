import "../PlaylistModal/playlistmodal.css";

const PlaylistModal = ({children , className}) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
};

export default PlaylistModal;
 