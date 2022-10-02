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
      <Container maxWidth='md'>
        <Typography theme={ theme } align='left' variant='h3'>Lucas Jensen</Typography>
        <Typography align='left' variant='h5'>Portfolio</Typography>
      </Container>

      <Container maxWidth='md' align='center'>
        <ProjectTable></ProjectTable>
      </Container>
      
      <Container sx={{ mt: 2 }} align='center' maxWidth='sm'>
        
        <Typography align='left' theme={ theme }>
        *indicates project is hosted from my home using a Raspberry Pi 4 with NGINX. Data is persisted with local instances on MongoDB and MySQL.
        Cloud computing, from my living room.
        </Typography>

        <Typography theme={ theme } sx={{ mt: 2 }} align='left' variant='subtitle2'>Download Resume&nbsp;
          <Link style={{color: "coral"}} align='left' variant='subtitle2' href='JensenResume.pdf' download>
            <DownloadIcon></DownloadIcon>
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

export default App;
