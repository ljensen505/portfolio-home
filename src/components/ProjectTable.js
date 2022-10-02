import { React, useEffect, useState } from 'react';
import ProjectItem from './Project';
import { createTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: 'monospace',
    },
    palette: {
        text: {
            primary: 'rgba(255,255,255,.7)'
        }
    }
  });

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
                <TableCell theme={ theme }>Project</TableCell>
                <TableCell theme={ theme } align='right'>Code</TableCell>
                <TableCell theme={ theme } align='right'>Stack</TableCell>
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