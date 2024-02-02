import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import TopBar from './components/TopBar';
import MyFooter from './components/MyFooter';
import Gallery from './components/Gallery';
import { Container } from 'react-bootstrap';
import HeaderComponent from './components/HeaderComponent';
//da qui import per la profile page
// import HeaderComponent from './components/HeaderComponent';
// import MyProfileComponent from './components/MyProfileComponent';
// import ButtonComponents from './components/ButtonsComponent';

function App() {
  return (
    <div className="App dark-background">
      <Container className="dark-background">
        <MyNav />
        <TopBar />
        <Gallery searchValue="Indiana Jones" />
        <Gallery searchValue="Joker" />

        <Gallery searchValue="Thor" />
        <Gallery searchValue="Superman" />
        <Gallery searchValue="Batman" />
        <MyFooter />
        {/* da qui avrei iniziato la parte profile*/}
        {/* <HeaderComponent /> */}
      </Container>
    </div>
  );
}

export default App;
