import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomTextField, FormBox } from '../../Styles/AllStyles';

const AddEvent = () => {
    const navigate = useNavigate();
    const RandomId = () => {
        return (Math.random()*10000);
    }
    const eventNameRef = useRef();
    const bgCodeRef = useRef();
    const idRef = useRef();
    const handleEventAdd = (e) => {
        e.preventDefault();
        const eventDetails = {
            id: Number(idRef.current.value),
            workName: eventNameRef.current.value,
            imgAlt: eventNameRef.current.value,
            bgCode: bgCodeRef.current.value,
            picture: 'ITHelp.png'        
        }
        fetch('http://localhost:5000/addVolunteerTask',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventDetails)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Successfully added');
                navigate('/admin/dashboard')
            }
            else{
                alert('Failed to add');
            }
        })
    }

    return (
        <Box>
            <Typography variant='h4' component="p" textAlign="center">
                Add an Event
            </Typography>
            <FormBox>
                <form onSubmit={handleEventAdd}>
                    <CustomTextField
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#FF7044'
                            }
                        }}
                        name="event" label="Enter Event Name" 
                        variant="standard" sx={{ input: { color: 'red' } }}
                         fullWidth margin="normal" inputRef={eventNameRef} required />
                    <CustomTextField
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#FF7044'
                            }
                        }}
                        name="description"  label="Enter Description" variant="standard" sx={{ input: { color: 'red' } }} fullWidth margin="normal" />
                    <CustomTextField
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#FF7044'
                            }
                        }}
                        name="description" inputRef={bgCodeRef} label="Enter background color code" variant="standard" sx={{ input: { color: 'red' } }} fullWidth margin="normal" required />
                    <CustomTextField
                        InputLabelProps={{
                            style: {
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                width: '100%',
                                color: '#FF7044'
                            }
                        }}
                        name="description" inputRef={idRef} label="Please Enter an ID carefully" variant="standard" sx={{ input: { color: 'red' } }} fullWidth margin="normal" required defaultValue={RandomId()} />
                    <Button type="submit" fullWidth variant="contained">Submit</Button>
                </form>
            </FormBox>
        </Box>
    );
};

export default AddEvent;