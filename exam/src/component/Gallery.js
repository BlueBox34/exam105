import NavHome from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import { Photo } from "../Data/Data.js";
import { Card, CardImg, Container } from "reactstrap";
import { useState } from "react";
console.log(Photo.name);

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
      <div style={{ opacity: isOpen ? "1" : "0" }}>{shot}</div>
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
