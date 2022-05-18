import {BrowserRouter,Route} from 'react-router-dom' 
import Navbar from './components/Navbar';
import ClassComponent from './LifeCycle/ClassComponent';
import componentDidMount from './LifeCycle/ComponentDidMount';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
 
import Home from './pages/Home';
 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>     
      <Route exact path='/' component={Home} />
      <Route   path='/class' component={ClassComponent} />
      <Route   path='/life' component={componentDidMount} />
      <Route   path='/add-user' component={AddUser} />
      <Route   path='/edit-user/:id' component={EditUser} />
       
       
    </BrowserRouter>
     
  );
}

export default App;
