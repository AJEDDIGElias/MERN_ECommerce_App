import React from 'react'
import Layout from '../components/layout/Layout.js'
import { BsGithub } from 'react-icons/bs';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/GIF_Working.gif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-2">
            You can refer to my source code anytime at : <a href='https://github.com/AJEDDIGElias/MERN_ECommerce_App'>Source Code</a>
          </p>
          <p className="mt-3">
            <BsGithub /> : AJEDDIGElias
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy