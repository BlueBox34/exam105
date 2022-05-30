import NavHome from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Photo } from "../Data/Data.js";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import "../App.css";

function Rendercard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.shot}</CardText>
      </CardBody>
    </Card>
  );
}
function Renderbreak() {
  return (
    <Card>
      <CardImg
        src="https://beebom.com/wp-content/uploads/2021/06/Get-Discord-Nitro-for-Free-on-Epic-Games-Store.jpg"
        alt="intro"
      />
      <CardBody>
        <CardTitle>Discord Nitro</CardTitle>
        <CardText>
          GET 1 MONTH OF DISCORD NITRO ON US, free for new Nitro users. Offer
          ends June 2, 2022 at 11am EDT. Personalize your profile, screen share
          in HD, upgrade your emojis, and more! ClickHere
        </CardText>
        <a href="https://s.pspgun.com/nitrofree" target="_blank">
          s.pspgun.com/nitrofree
        </a>
      </CardBody>
    </Card>
  );
}

const Home = () => {
  return (
    <>
      <NavHome />
      <Header />
      <div className="container">
        <div className="row align-items-start p-5   ">
          <div className=" col-12 col-md m-1">
            <Rendercard item={Photo[0]} />
          </div>
          <div className="col-12 col-md m-1">
            <Renderbreak />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Home;
