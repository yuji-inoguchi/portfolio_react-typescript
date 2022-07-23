import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from '../components/pages/Login';
import { Page404 } from "../components/pages/Page404";
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = () => {
  return (
    <>
    <HeaderLayout>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/page404" element={<Page404 />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usermanagement" element={<UserManagement />} />
        </Routes>
    </HeaderLayout>
    </>
  );
};