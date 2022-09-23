import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

import Routing from './Component/Routing';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;





