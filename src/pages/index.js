
import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import Header from "@components/header";
import Footer from "@components/footer"

const Top = () => {
    return (
        <div>
            <Header/>
            <h1>Gatsby Blog Site</h1>
            <button onClick={() => scrollTo('html')}>トップに戻る</button>
            <Footer/>
        </div>
    )
}

export default Top