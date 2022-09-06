import "./Header.scss";
import insta_image from "../../images/header/instagram.png";
import bell from "../../images/header/notification.png";
import search from "../../images/header/search-normal.png";
import profile_image from "../../images/header/image 55.png";
import arrow_down from "../../images/header/arrow-down.png";
const Header = () => {
  return (
    <div className="p-header">
      <div className="p-header__left">
        <p className="p-header__left__title">Analytics 🔥</p>
        <p className="p-header__left__paragraph">
          Here's whats happening in your Cake Account today
        </p>
      </div>
      <div className="p-header__middle">
        <div className="p-header__middle__option-lists">
          <img
            className="p-header__middle__option-lists__option__logo-image"
            src={insta_image}
            alt="insta_image"
          />
          <p className="p-header__middle__option-lists__option__logo-name">
            Instagram
          </p>
          <img
            className="p-header__middle__option-lists__option__arrow"
            src={arrow_down}
            alt="arrow_down"
          />
        </div>
      </div>

      <div className="p-header__right">
        <div className="p-header__right__search">
          <img src={search} alt="search_icon" />
        </div>
        <div className="p-header__right__bell">
          <img src={bell} alt="bell_icon" />
        </div>
        <div className="p-header__right__profile">
          <div className="p-header__right__profile__picture">
            <img src={profile_image} alt="profile_image" />
          </div>
          <div className="p-header__right__profile__name-position">
            <p className="p-header__right__profile__name-position p-header__right__profile__name-position__name">
              Thomas F.
            </p>
            <p className="p-header__right__profile__name-position p-header__right__profile__name-position__position">
              UI Designer
            </p>
          </div>
          <div className="p-header__right__profile__arrow">
            <img src={arrow_down} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
