import Header from './conponents/Header';
import Footer from './conponents/Footer';
import DropupMenu from './conponents/DropupMenu';
import ThemeProvider from './context/ThemeContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider>
      <Header></Header>
      <Home />
      <Footer></Footer>
      <DropupMenu></DropupMenu>
    </ThemeProvider>
  );
}

export default App;
