
import React from "react"

import Header from "@components/header";
import Footer from "@components/footer"
import scrollTo from 'gatsby-plugin-smoothscroll';


const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About Page</h1>
            <button onClick={() => scrollTo('html')}>トップに戻る</button>
            <Footer/>
        </div>
    )
}

export default AboutPage