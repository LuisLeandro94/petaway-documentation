import Landing from './shared/components/Landing';
import Endpoints from './shared/components/Endpoints'
import About from './shared/components/About'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/endpoints' element={<Endpoints />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/' element={<Landing />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
