// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Logo from '../assets/BlueTechtonicaWord.png'

// function MyNavBar(props) {

//   return (
//     <>
//     <Navbar bg="dark" variant="dark" sticky="top">
//       <Container>
//         <Navbar.Brand href="/">
//         <img
//               src={Logo}
//               height="30"
//               className="d-lg-inline-block"
//               alt="React Bootstrap logo"
//             />
//         </Navbar.Brand>
//         <Nav.Link >Your Link</Nav.Link>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             Signed in as: <a href="#login">Cristina Rodriguez</a>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   );
// };

// export default MyNavBar;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/intelligent_change_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className="Link" to="/?cat=mindfulness">
            <h6>Mindfulness</h6>
          </Link>
          <Link className="Link" to="/?cat=morningroutine">
            <h6>Morning Routine</h6>
          </Link>
          <Link className="Link" to="/?cat=productivity">
            <h6>Productivity</h6>
          </Link>
          <span>Mimi Ikonn</span>
          <br></br>
          <span>Logout</span>
          <br></br>
          <span className="write">
            <Link to="/write">Add Post</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
