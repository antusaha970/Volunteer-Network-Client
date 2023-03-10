import React from 'react';
import { HomeBox } from '../../Styles/AllStyles';
import NavArea from '../NavArea/NavArea';
import SearchSection from '../SearchSection/SearchSection';
import VolunteerTaskContainer from '../VolunteerTaskContainer/VolunteerTaskContainer';

const Home = () => {
    return (
        <HomeBox>
            <NavArea />
            <SearchSection />
            <VolunteerTaskContainer />
        </HomeBox>
    );
};

export default Home;