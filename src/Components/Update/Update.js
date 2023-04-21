import React ,{useState ,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {

  useEffect(()=>{
    setFirstName(localStorage.getItem('firstname'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'));
  },[]);

    const [firstname, setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [ID,setID]=useState(null);

    console.log(firstname);
    console.log(lastName);

    const navigate=useNavigate();

    const sendDataToApi=()=>{
        axios.put(`https://644219cb76540ce225845fe1.mockapi.io/crud/${ID}`,{
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
      <input name='fname' value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input name='lname' value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
    </Form.Field>
    
    <Button onClick={sendDataToApi} type='submit'>Update</Button>
  </Form>
    </>
  )
}
