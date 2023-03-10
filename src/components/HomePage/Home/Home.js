import React from 'react';
import { HomeBox } from '../../Styles/AllStyles';
import NavArea from '../NavArea/NavArea';
import SearchSection from '../SearchSection/SearchSection';

const Home = () => {
    return (
        <HomeBox>
            <NavArea />
            <SearchSection />
        </HomeBox>
    );
};

export default Home;