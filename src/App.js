import { Routes, Route} from 'react-router';

import { HomePage } from './components/HomePage';

import './styles/app.css'
import Navbar from './components/Navbar';
import NewRequestPage from './components/NewRequestPage';
import RequestListPage from './components/RequestListPage';
import NewClaimPage from './components/NewClaimPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/new-request" element={<NewRequestPage />} />
        <Route path="/list-requests" element={<RequestListPage />} />
        <Route path="/new-claim/:id" element={<NewClaimPage />} />
        <Route component={Error} /> 
      </Routes>
    </div>
  );
}

export default App;