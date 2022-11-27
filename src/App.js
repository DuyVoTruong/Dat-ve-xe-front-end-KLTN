import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/web/Home';
import Login from './components/web/Login';
import Signup from './components/web/Signup';
import LichTrinh from './components/web/LichTrinh';
import SignupNhaXe from './components/nhaXe/SignupNhaXe';
import DatVe from './components/web/DatVe';
import NhaXeAdmin from './components/admin/NhaXeAdmin';
import TuyenXeAdmin from './components/admin/TuyenXeAdmin';
import AdminHome from './components/admin/AdminHome';
import NhaXeAdminUpdate from './components/admin/NhaXeAdminUpdate';
import NhaXeAdminAdd from './components/admin/NhaXeAdminAdd';
import TuyenXeAdminUpdate from './components/admin/TuyenXeAdminUpdate';
import TuyenXeAdminAdd from './components/admin/TuyenXeAdminAdd';
import NhaXeHome from './components/nhaXe/NhaXeHome';
import TuyenXeNhaXe from './components/nhaXe/TuyenXeNhaXe';
import TuyenXeNhaXeAdd from './components/nhaXe/TuyenXeNhaXeAdd';
import TuyenXeNhaXeUpdate from './components/nhaXe/TuyenXeNhaXeUpdate';
import LayoutAdmin from './layout/LayoutAdmin';
import LayoutNhaXe from './layout/LayoutNhaXe';
import LayoutWeb from './layout/LayoutWeb';
import BenXeAdmin from './components/admin/BenXeAdmin';
import BenXeAdminAdd from './components/admin/BenXeAdminAdd';
import BenXeAdminUpdate from './components/admin/BenXeAdminUpdate';

function App() {

    return(
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<LayoutAdmin></LayoutAdmin>}>
            <Route path='home' element={<AdminHome></AdminHome>}></Route>
            <Route path='nha-xe' element={<NhaXeAdmin></NhaXeAdmin>}></Route>
            <Route path='nha-xe/update/*' element={<NhaXeAdminUpdate></NhaXeAdminUpdate>}></Route>
            <Route path='nha-xe/add' element={<NhaXeAdminAdd></NhaXeAdminAdd>}></Route>
            <Route path='tuyen-xe' element={<TuyenXeAdmin></TuyenXeAdmin>}></Route>
            <Route path='tuyen-xe/update/*' element={<TuyenXeAdminUpdate></TuyenXeAdminUpdate>}></Route>
            <Route path='tuyen-xe/add' element={<TuyenXeAdminAdd></TuyenXeAdminAdd>}></Route>
            <Route path='ben-xe' element={<BenXeAdmin></BenXeAdmin>}></Route>
            <Route path='ben-xe/add' element={<BenXeAdminAdd></BenXeAdminAdd>}></Route>
            <Route path='ben-xe/update' element={<BenXeAdminUpdate></BenXeAdminUpdate>}></Route>
            <Route path="*" element={<Navigate to="home" replace />}></Route>
          </Route>
          <Route path='/nha-xe/*' element={<LayoutNhaXe></LayoutNhaXe>}>
            <Route path="home" element={<NhaXeHome></NhaXeHome>} />
            <Route path="tuyen-xe" element={<TuyenXeNhaXe></TuyenXeNhaXe>} />
            <Route path="tuyen-xe/add" element={<TuyenXeNhaXeAdd></TuyenXeNhaXeAdd>} />
            <Route path="tuyen-xe/update/*" exact element={<TuyenXeNhaXeUpdate></TuyenXeNhaXeUpdate>} />
            <Route path="*" element={<Navigate to="home" replace />}></Route>
          </Route>
          <Route path='/*' element={<LayoutWeb></LayoutWeb>}>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='sign-up' element={<Signup></Signup>}></Route>
            <Route path='lich-trinh' element={<LichTrinh></LichTrinh>}></Route>
            <Route path='nha-xe/sign-up' element={<SignupNhaXe></SignupNhaXe>}></Route>
            <Route path='dat-ve-xe' element={<DatVe></DatVe>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    );
      
  
}

export default App;