import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import MyNavbar from './Components/MyNavbar';

function App() {
  return (
    <>
      <Container className="big">
        <MyNavbar></MyNavbar>
      </Container>
      ;
    </>
  );
}

export default App;
