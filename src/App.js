import "./App.css";
import ClassParent from "./class components/ClassParent";
import ContextParent from "./Components/ContextApi/ContextParent";

import MainApp from "./Components/MainApp";
import Home from "./MainLayout/Home";
import MainLayout from "./MainLayout/MainLayout";
import MainLayoutOne from "./MainLayout/MainLayoutOne";

function App() {
  return (
    <div className="App">
      <div>{/* <MainApp/> */}</div>
      <div>{/* <Home /> */}</div>
      <div>{/* <MainLayout /> */}</div>
      <div>
        <MainLayoutOne />
      </div>
      {/* <div>
        <ClassParent />
      </div> */}
    </div>
  );
}

export default App;
