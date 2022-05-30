import NavHome from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Photo } from "../Data/Data.js";
import { Button, Card, CardImg, Container } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
// console.log(Photo.name);

const Renderpic = ({ item, onClick }) => {
  return item.map((e) => {
    return <Pic id={e.id} image={e.image} name={e.name} shot={e.shot} />;
  });
};

const Pic = ({ id, image, name, shot }) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(!isOpen);
  };
  return (
    <Card
      className="m-5"
      key={id}
      onClick={() => {
        open();
      }}
    >
      <CardImg src={image} alt={name}></CardImg>
      <h5>{name}</h5>
      <div style={{ opacity: isOpen ? "1" : "0" }}>
        {shot}
        <Button className="bg-dark ms-2">
          <Link
            className="text-white"
            style={{ textDecoration: "none" }}
            to={{ pathname: `/ViewGallery/${id}` }}
          >
            View more
          </Link>
        </Button>
      </div>
    </Card>
  );
};

const Gallery = () => {
  return (
    <>
      <NavHome />
      <Header />
      <Container>
        <div className="col-12">
          <div className="row">
            <Renderpic item={Photo} />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Gallery;
