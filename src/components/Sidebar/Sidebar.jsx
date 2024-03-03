import "../Sidebar/sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar__container">
      <div className="sidebar__first__section">
        <div className="sidebar__logo__section">
          <i class="bx bxl-spotify sidebar__icon"></i>
          <p className="sidebar__logo__paragraph">Spotify</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
