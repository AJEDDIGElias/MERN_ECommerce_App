import React from 'react'
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { GrLinkedin } from 'react-icons/gr';
import Layout from './../components/layout/Layout';


const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/GIF_Working.gif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about the website feel free to contact me anytime
          </p>
          <p className="mt-3">
            <BiMailSend /> : eajeddig@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +33 6 95 17 18 98
          </p>
          <p className="mt-3">
            <GrLinkedin /> : Elias AJEDDIG
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact