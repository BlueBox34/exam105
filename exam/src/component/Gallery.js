import NavHome from "./Nav";

import Header from "./Header";
import Footer from "./Footer";

import { Photo } from "../Data/Data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardImg,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
// console.log(Photo.name);

const Renderpic = ({ item, onClick }) => {
  return item.map((e) => {
    return (
      <Pic
        id={e.id}
        image={e.image}
        name={e.name}
        shot={e.shot}
        likes={e.like}
      />
    );
  });
};

const Pic = ({ id, image, name, shot, likes }) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(!isOpen);
  };
  const [isOn, setOn] = useState(false);
  const on = () => {
    setOn(!isOn);
  };
  const Like = () => {
    const [like, setLike] = useState(false);
    return (
      <>
        <ModalBody>
          <h3>Amount Likes {like ? likes + 1 : likes}</h3>
        </ModalBody>
        <ModalFooter>
          <Button
            color={like ? "success" : "secondary"}
            onClick={() => {
              setLike(!like);
            }}
          >
            <FontAwesomeIcon className="mr-1" icon={faHeart} />
            {like ? "Unlike" : "Like"}
          </Button>
          <Button onClick={on}>Cancel</Button>
        </ModalFooter>
      </>
    );
  };
  return (
    <>
      <Modal isOpen={isOn} toggle={on}>
        <ModalHeader toggle={on}>Likes</ModalHeader>
        <Like />
      </Modal>
      <Card
        className="m-5"
        key={id}
        onClick={() => {
          open();
        }}
      >
        <CardImg onClick={on} src={image} alt={name}></CardImg>
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
    </>
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
