import React ,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const [firstname, setFirstName]=useState('');
    const [lastName,setLastName]=useState('');

    console.log(firstname);
    console.log(lastName);

    const navigate=useNavigate();

    const sendDataToApi=()=>{
        axios.post(`https://644219cb76540ce225845fe1.mockapi.io/crud`,{
            firstname,
            lastName,

        })
        navigate('/read');
        console.log("Data  send succesfully");
        console.log(Error);
    }
    
  return (
    <>
        <Form>
    <Form.Field>
      <label>First Name</label>
      <input name='fname' onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name='lname' onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
    
    <Button onClick={sendDataToApi} type='submit'>Submit</Button>
  </Form>
    </>
  )
}
