import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import NewPage from './pages/newPage/NewPage'
import SinglePage from './pages/singlePage/SinglePage'
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/">
      <Route index element={<Home/>} />
      <Route path="login" element={<Login/>}/>
      <Route path="users">
      <Route index element={<List/>}/>
      <Route path=":userid" element={<SinglePage/>}/>
      <Route path="new" element={<NewPage/>}/>
      </Route>
      <Route path="users">
      <Route index element={<List/>}/>
      <Route path=":productid" element={<SinglePage/>}/>
      <Route path="new" element={<NewPage/>}/>
      </Route>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
