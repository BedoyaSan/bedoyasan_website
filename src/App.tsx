import Container from '@mui/material/Container';
import './App.css'
import ResumeHeader from './components/ResumeHeader';
import MainContent from './components/MainContent';


function App() {
  return (
    <>
      <Container maxWidth="lg">
        <ResumeHeader />
        <MainContent />
      </Container>
    </>
  )
}

export default App
