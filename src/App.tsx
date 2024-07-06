import Header from "./conponents/common/Header";
import Footer from "./conponents/common/Footer";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import DropupMenu from "./conponents/common/DropupMenu";

function App() {
  return (
    <>
      <Header></Header>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer></Footer>
      <DropupMenu></DropupMenu>
    </>
  );
}

export default App;
