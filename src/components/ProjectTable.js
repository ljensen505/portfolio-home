import '../App.css';
import { React, useEffect, useState } from 'react';
import ProjectItem from './Project';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function BasicTable() {
    const [projects, setData]=useState([]);
    const getData=()=>{
        fetch('data.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }

    useEffect(()=>{
        getData()
    },[])
      
    return (
        <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,.7)' }}>Project</TableCell>
                <TableCell align='right' style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,.7)' }}>Code</TableCell>
                <TableCell align='right' style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,.7)' }}>Stack</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {projects.map((project, i) => <ProjectItem proj={project} key={i}></ProjectItem>)}
      
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default BasicTable;