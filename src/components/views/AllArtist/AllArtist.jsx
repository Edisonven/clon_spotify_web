import "../AllArtist/allartist.css";
import Principal from "../../Principal/Principal";

const AllArtist = () => {
  return (
    <section className="principal__container allartist__container">
      <Principal showFilteredData={true} />
    </section>
  );
};

export default AllArtist;
