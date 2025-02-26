import React from 'react';
import Topbar from "../../layouts/topbar/topbar.tsx";
import Header from "../../layouts/header/header.tsx";

const MainPage: React.FC = () => {
    return(
        <div>
            <Topbar/>
            <Header/>
        </div>
    );
}

export default MainPage;