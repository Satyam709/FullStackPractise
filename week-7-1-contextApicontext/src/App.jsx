import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Landing from './Components/Landing';
function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element = {<Landing></Landing>}/>
  </Routes>
  </BrowserRouter>
 }

export default App;
