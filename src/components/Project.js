import '../App.css';
import React from "react";
import { Link, TableCell, TableRow } from "@mui/material";

function ProjectItem({proj}) {
    return (
        <TableRow>
            <TableCell>
                <Link style={{ fontFamily: 'monospace', color: 'cornflowerblue'}} href={ proj.demoUrl }>{ proj.name }</Link>
            </TableCell>
            <TableCell align='right'>
                <Link style={{ fontFamily: 'monospace', color: 'cornflowerblue'}} target="_blank" href={ proj.sourceUrl }>{ proj.sourceName }</Link>
            </TableCell>
            <TableCell style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,.7)' }} align='right'>{proj.stack}</TableCell>
        </TableRow>
    );
}

export default ProjectItem;