import './App.css';
import { createTheme, Container, Typography, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ProjectTable from './components/ProjectTable';

const theme = createTheme({
  typography: {
    fontFamily: 'monospace'
  }
});

function App() {
  return (
    <div className="App">
      <Container maxWidth='sm'>
        <Typography theme={ theme } align='left' variant='h5'>Lucas Jensen</Typography>
        <Typography align='left' variant='subtitle2'>Portfolio</Typography>
      </Container>

      <Container maxWidth='sm' align='center'>
        <ProjectTable></ProjectTable>
      </Container>
      
      <Container sx={{ mt: 2 }} align='center' maxWidth='sm'>
        
        <Typography align='left' variant='inherit'>
        All projects hosted from my home using a Raspberry Pi 4 with NGINX. Data is persisted with local instances on MongoDB and MySQL.
        </Typography>

        <Typography sx={{ mt: 2 }} align='left' variant='subtitle2'>Download Resume&nbsp;
          <Link style={{color: "coral"}} align='left' variant='subtitle2' href='JensenResume.pdf' download>
            <DownloadIcon fontSize='sm'></DownloadIcon>
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default App;
