import { Route, Routes} from "react-router-dom";
import Sidenav from "./components/sidenav/Sidenav";
import Header from "./components/header/Header";
import CardHeader from "./components/card-header/CardHeader";
import account_react from "./images/header-card/status-up.png"
import arrow_up from "./images/header-card/arrow-up.png"
import CardSidebar from "./components/card-sidebar/CardSidebar";
import Sample from "./pages/sample";

const RoutesTotal = () => (
  <>
    <Routes>
    <Route path="/" element={<Sidenav/>}/>
    <Route path="/main" element={<Sample/>}/>
    <Route path="/header" element={<Header/>} />
    <Route path="/side-header" element={<CardSidebar/>} />
    <Route path="/card-header" element={<CardHeader image={account_react}  arrow={arrow_up} action="Account React" count="452K" growth="8.2" week="This week" color="green"/>} />
    </Routes>
  </>
);

export default RoutesTotal;
