import Navbar from "./navbar/Navbar";
import './app.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./registration/Registration";
function App() {
  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <Routes>
                  <Route path ="/registration" component={Registration}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
