import './scss/custom.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctors from './routes/Doctors';
import Doctor from './routes/Doctor';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Doctors />} />
        <Route path="/:doctorId" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
