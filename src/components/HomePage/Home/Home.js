import React from 'react';
import { HomeBox } from '../../Styles/AllStyles';
import NavArea from '../NavArea/NavArea';
import SearchSection from '../SearchSection/SearchSection';
import VolunteerTaskContainer from '../VolunteerTaskContainer/VolunteerTaskContainer';
import {useState, useEffect } from 'react';

const Home = () => {

    const [volunteerTask, setVolunteerTask] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/allVolunteerTask?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setVolunteerTask(data);
            })
    }, [search]);


    return (
        <HomeBox>
            <NavArea />
            <SearchSection search={search} setSearch={setSearch} />
            <VolunteerTaskContainer volunteerTask={volunteerTask} loading={loading}   />
        </HomeBox>
    );
};

export default Home;