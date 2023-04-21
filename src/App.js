import Create from './Components/Create/Create';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';
import Delete from './Components/Delete/Delete'

function App() {
  return (
    <>
    
    <h3>react Crud operations</h3>

    {/* <Create />   */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='/read' element={<Read />} />
      <Route path='/update' element={<Update />} />
      <Route path='/delete' element={<Delete />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
