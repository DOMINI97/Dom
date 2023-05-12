import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Hero() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80')",
          height: "400px",
        }}>
        <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>WelCome Abord</h1>
              <h4 className='mb-3'>Will to get job Done</h4>
              <MDBBtn tag='a' outline size='lg'>
                Call to action
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
