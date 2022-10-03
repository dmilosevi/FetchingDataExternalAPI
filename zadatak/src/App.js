import './App.css';
import Userlist from './components/Userlist';
import Details from './components/Details';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Userlist />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
