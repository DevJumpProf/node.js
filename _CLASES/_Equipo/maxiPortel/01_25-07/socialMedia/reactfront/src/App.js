import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowPosts from './post/ShowPosts';
import CompCreatePost from './post/CreatePost';
import CompEditPost from './post/EditPost';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowPosts />} />
            <Route path='/create' element={ <CompCreatePost />} />
            <Route path='/edit/:id' element={ <CompEditPost />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
