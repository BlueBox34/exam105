import React, { useState } from "react";
import Footer from "./Footer";
import NavHome from "./Nav";
import Header from "./Header";
import { Photo } from "../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  CardTitle,
} from "reactstrap";
import { comments } from "../Data/Comment";

const CommentForm = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const [name, setname] = useState("");
  const [com, setCom] = useState("");

  const isError = () => {
    if (name.length < 3) return "Must be greater than 2 characters";
    if (name.length > 15) return "Must be 3 characters or less";
    if (com.length < 1) return "Must be greater than 0 characters";
    return null;
  };
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          toggle();
        }}
      >
        <span className="fa fa-pencil fa-lg"></span>Comments
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={() => {
          toggle();
        }}
      >
        <ModalHeader
          toggle={() => {
            toggle();
          }}
        >
          Submit Comments
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>
                <h5>Your Name</h5>
              </Label>
              <Input
                onChange={(e) => setname(e.target.value)}
                bsSize="lg"
                invalid={isError() !== null}
                placeholder="Your Name"
                type="text"
              />
              <FormFeedback> {isError()}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>
                <h5>Comments</h5>
              </Label>
              <Input
                rows="6"
                type="textarea"
                onChange={(e) => {
                  setCom(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              if (com === "" || name === "") {
                return;
              }
              toggle();
              props.AddData(e, name, com);
              setname("");
              setCom("");
            }}
          >
            Submit
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

const Like = () => {
  const [like, setLike] = useState(false);
  return (
    <Button
      color={like ? "success" : "secondary"}
      onClick={() => {
        setLike(!like);
      }}
    >
      <FontAwesomeIcon className="mr-1" icon={faHeart} />
      {like ? "Unlike" : "Like"}
    </Button>
  );
};

const RenderComment = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      <h4>Comments</h4>
      <div className="list-group">
        {comments.map((item) => (
          <li className="list-group-item" key={item.id}>
            <b>{item.first_name}</b>
            <br />
            {item.com}
          </li>
        ))}
      </div>
    </div>
  );
};

const DetailPic = () => {
  const { id } = useParams();
  const [data, setData] = useState(comments);
  const AddData = (e, name, com) => {
    setData([
      ...data,
      {
        id: data.length + 1,
        first_name: name,
        com: com,
      },
    ]);
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <CardImg src={Photo[id - 1].image} />
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <CardTitle>{Photo[id - 1].name}</CardTitle>
                <p>{Photo[id - 1].shot}</p>
                <div className="d-flex justify-content-between">
                  <Like />
                  <CommentForm AddData={AddData} />
                </div>
                <RenderComment comments={data} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const ViewGallery = () => {
  return (
    <>
      <NavHome />
      <Header />
      <DetailPic />
      <Footer />
    </>
  );
};
export default ViewGallery;
