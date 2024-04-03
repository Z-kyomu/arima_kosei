import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from "react-router-dom";

// interface NormalLayoutProps {
//     children?: React.ReactNode;
// }

const NormalLayout = (/*{ children } :NormalLayoutProps */) => {
    return (
        <>
            <Outlet/>
            <Header />
            {/* {children} */}
            <Footer />
        </>
    );
};

export default NormalLayout;
