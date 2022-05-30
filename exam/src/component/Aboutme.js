import NavHome from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Card, CardBody, CardImg, CardText } from "reactstrap";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-3 pb-2">
          <div className="col-12 col-md-4 ">
            <Card>
              <CardImg
                className="d-flex align-items-center"
                src="https://i.pinimg.com/564x/05/d6/c6/05d6c675830477c9af24409b014aef2c.jpg"
                alt="intro"
              />
              <CardBody>
                If you go to sleep, then wake up late We just don't have to
                sleep.
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-4">
            <div>
              <Card className="p-2">
                <h4> Profile</h4>
                <CardBody>
                  <CardText>Pongsapuk Lubkim 64130500220</CardText>
                  <CardText>Age 19 Year</CardText>
                </CardBody>
              </Card>
              <Card className="p-2">
                <h4> Education</h4>
                <CardBody>
                  <li>CS@SIT KMUTT</li>
                  <li>Bodindecha (Sing Singhaseni) School</li>
                  <li>Trium Udom Suksa Pattanakarn Nonthaburi School</li>
                  <li>Prasartvidhyanonthaburi School</li>
                </CardBody>
              </Card>
              <Card className="mb-2">
                <h4> Favorite Subjects</h4>
                <CardBody>
                  <li>Math</li>- Math is fun magic
                  <li>Logic</li>- To find of correct reasoning
                  <li>Computer</li>- Cold air room
                  <p></p>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <Card className="p-2">
              <h4> Favorite Movies</h4>
              <CardBody>
                <li>Green Book</li>Green Book is about the relationship between
                two real-life people: Donald Shirley and Tony “Lip” Vallelonga.
                Shirley was born in 1927 and grew up in a well-off black family
                in Florida, where he emerged as a classical piano prodigy.
                <p></p>
                <li>Venom</li>Venom is a character appearing in American comic
                books published by Marvel Comics. The character is a sentient
                alien symbiote with an amorphous, liquid-like form, who survives
                by bonding with a host, usually human.
                <p></p>
                <li>Spider-Man™: Into the Spider-Verse</li>animation spider man
                version Miles Morales based story on Comic Spider Verse that
                talking about various Mauiverses Possibility of Butterfly
                Effects
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const Aboutme = () => {
  return (
    <>
      <NavHome />
      <Header />
      <Profile />
      <Footer />
    </>
  );
};
export default Aboutme;
