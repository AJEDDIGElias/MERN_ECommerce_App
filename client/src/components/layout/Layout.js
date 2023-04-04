import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
        </Helmet>
        <Header></Header>
        <main style={{minHeight:'70vh'}}>
            <Toaster />
            {children} 
        </main>
        <Footer></Footer>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Ecommerce App - MERN Project',
  description: 'MERN Stack Project',
  keywords: 'mern,react,mongodb,node,nodejs,express,ecommerce',
  author: 'Elias AJEDDIG',
}

export default Layout