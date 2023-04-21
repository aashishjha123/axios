import React,{useEffect,useState} from 'react'
import { Table,Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {

    const [apiData,setApiData]=useState([]);

    useEffect(()=>{
        axios.get(`https://644219cb76540ce225845fe1.mockapi.io/crud`)
        .then((dta)=>{
            setApiData(dta.data);
        })
    });

    const getData=()=>{
        axios.get(`https://644219cb76540ce225845fe1.mockapi.io/crud`)
        .then((dta)=>{
            setApiData(dta.data);
        })
    }

    const getID=(id)=>{
        console.log(id);
        localStorage.setItem('ID',id)
    }

    const deleteData=(id)=>{
        axios.delete(`https://644219cb76540ce225845fe1.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
        alert("deleted Succesfully")
    }

  return (
  <>
  <div>
  <Table celled > 
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((newData)=>{
            return(
                <Table.Row >
                <Table.Cell> {newData.id}</Table.Cell>
                <Table.Cell>{newData.firstname}</Table.Cell>
                <Table.Cell>{newData.lastName}</Table.Cell>
                <Table.Cell>
                    <Link to='/update'>
                    <Button onClick={()=>getID(newData.id)} >Update</Button>
                    </Link>
                    </Table.Cell>
                <Table.Cell> <Link to='/read'>
                    <Button onClick={()=>deleteData(newData.id)}>Delete</Button>
                    </Link></Table.Cell>
               

              </Table.Row>
            )

        })}
    
    </Table.Body>
  </Table>

  </div>  
  </>
  )
}
