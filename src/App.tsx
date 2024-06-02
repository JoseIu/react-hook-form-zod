import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './components/UserForm';
import DataFrom from './components/dataForm/DataFrom';
import NavList from './components/nav/NavList';

const App = () => {
  return (
    <main className="wrapper">
      <h1 className="title">React hook form and Zod</h1>

      <NavList />
      <Routes>
        <Route path="/user-form" index element={<UserForm />} />
        <Route path="/data-form" index element={<DataFrom />} />

        <Route path="*" element={<Navigate to={'/user-form'} replace />} />
      </Routes>
    </main>
  );
};

export default App;
