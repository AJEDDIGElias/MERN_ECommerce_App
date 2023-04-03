import React from 'react'
import Layout from '../components/layout/Layout.js'

const About = () => {
  return (
    <Layout title={"About US - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/MERN.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This project is a complete MERN (MongoDB, Express, React, NodeJS) Stack Ecommerce App project.
            In this MERN stack project, I've been through the process of building a full-stack web application using MongoDB, Express, React, and Node.js. 
            I have learned how to build a responsive and dynamic user interface with React, create a back-end API with Express and Node.js, and store data in a NoSQL database with MongoDB. 
            Thanks to ths project, I have a solid understanding of the MERN stack.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About