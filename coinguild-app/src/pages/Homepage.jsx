import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../css/PawGuild.css";



const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className="slogan">
                <div className="text-center slogan-text">
                    Pawsitively Protected
                </div>
                <div className="text-center slogan-text">
                    Seamlessly Insured
                </div>
                <div className="text-center slogan-text">
                    Blockchain Reinforced
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;