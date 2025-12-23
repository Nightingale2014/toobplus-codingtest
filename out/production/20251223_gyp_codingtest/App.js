import React from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Test1 from "./components/Test1";
import Section3 from "./components/Section3";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <section id="home" className="main-section">
                    <h1>코딩테스트<br />박기영</h1>
                </section>
                <Section1 />
                <Test1 />
                <Section3 />
            </main>
        </>
    );
}

export default App;
