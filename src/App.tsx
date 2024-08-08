import Header from './conponents/Header';
import Footer from './conponents/Footer';
import DropupMenu from './conponents/DropupMenu';
import ThemeProvider from './context/ThemeContext';
import Home from './pages/Home/Home';
import MessagePopup from './conponents/MessagePopup';
import { useState } from 'react';

function App() {
  const [messagePopup, setMessagePopup] = useState(false);
  return (
    <ThemeProvider>
      <Header></Header>
      <Home />
      <Footer></Footer>
      <DropupMenu onOpen={() => setMessagePopup(true)}></DropupMenu>
      <MessagePopup
        onClose={() => setMessagePopup(false)}
        visible={messagePopup}
      ></MessagePopup>
    </ThemeProvider>
  );
}

export default App;
