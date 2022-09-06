import Header from "../components/header/Header";
import Sidenav from "../components/sidenav/Sidenav";
import CardHeader from "../components/card-header/CardHeader";
import CardSidebar from "../components/card-sidebar/CardSidebar";
import Graph from "../components/graph/Graph";
import Map from "../components/map/Map";
import account_react from "../images/header-card/status-up.png";
import followers from "../images/header-card/people.png";
import likes from "../images/header-card/like.png";
import saved from "../images/header-card/save.png";
import arrow_up from "../images/header-card/arrow-up.png";
import arrow_down from "../images/header-card/arrow-down.png";
import us from "../images/map/usa.png";
import india from "../images/map/india.png";
import pakistan from "../images/map/pakistan.png";
import ban from "../images/map/Frame 63.png";
import "./sample.scss";
const Sample = () => {
  let countries = [
    {
      image: us,
      name: "United States",
      progress: "20",
    },
    {
      image: india,
      name: "India",
      progress: "40",
    },
    {
      image: pakistan,
      name: "Pakistan",
      progress: "20",
    },
    {
      image: ban,
      name: "Bangladesh",
      progress: "25",
    },
  ];
  return (
    <div className="parent">
      <aside className="parent__sidenav">
        <Sidenav />
      </aside>
      <div className="parent__container">
        <header>
          <Header />
        </header>
        <nav className="parent__container__card-header">
          <CardHeader
            image={account_react}
            arrow={arrow_up}
            action="Account Reach"
            count="404k"
            growth="0.8%"
            week="This week"
            color="green"
          />
          <CardHeader
            image={followers}
            arrow={arrow_down}
            action="Followers"
            count="300k"
            growth="0.8%"
            week="This week"
            color="red"
          />
          <CardHeader
            image={likes}
            arrow={arrow_up}
            action="Likes"
            count="340k"
            growth="0.8%"
            week="This week"
            color="green"
          />
          <CardHeader
            image={saved}
            arrow={arrow_down}
            action="Saved"
            count="40k"
            growth="0.8%"
            week="This week"
            color="red"
          />
        </nav>
        <div className="parent__container__sections-sidebar-card">
          <div className="parent__container__sections-sidebar-card__sections">
            <section className="parent__container__sections-sidebar-card__sections__section-1">
              <Graph />
            </section>
            <section className="parent__container__sections-sidebar-card__sections__section-2">
              <Map data={countries}/>
            </section>
          </div>
          <aside className="parent__container__sidebar-card">
            <CardSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Sample;
