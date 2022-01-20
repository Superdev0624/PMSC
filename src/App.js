import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
export default function App() {
    return (
    <div>
        <Routes>
            <Route path='/sdfsf' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
        </Routes>
    </div>
    );
}