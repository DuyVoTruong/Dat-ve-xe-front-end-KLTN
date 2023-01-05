import './App.css';
import './css/searchForm.css'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LayoutAdmin from './layout/LayoutAdmin';
import AdminHome from './components/admin/AdminHome';
import NhaXeAdmin from './components/admin/NhaXe/NhaXeAdmin';
import NhaXeAdminUpdate from './components/admin/NhaXe/NhaXeAdminUpdate';
import NhaXeAdminAdd from './components/admin/NhaXe/NhaXeAdminAdd';
import TuyenXeAdmin from './components/admin/TuyenXe/TuyenXeAdmin';
import TuyenXeAdminUpdate from './components/admin/TuyenXe/TuyenXeAdminUpdate';
import TuyenXeAdminAdd from './components/admin/TuyenXe/TuyenXeAdminAdd';
import BenXeAdmin from './components/admin/BenXe/BenXeAdmin';
import TaiKhoanAdmin from './components/admin/TaiKhoan/TaiKhoanAdmin';
import LayoutNhaXe from './layout/LayoutNhaXe';
import NhaXeHome from './components/nhaXe/NhaXeHome';
import TuyenXeNhaXe from './components/nhaXe/TuyenXe/TuyenXeNhaXe';
import LayoutWeb from './layout/LayoutWeb';
import Home from './components/web/Home';
import Login from './components/web/Login';
import Signup from './components/web/Signup';
import LichTrinh from './components/web/LichTrinh';
import TuyenXe from './components/web/TuyenXe';
import DatVe from './components/web/DatVe';
import ThongTinTaiKhoan from './components/web/ThongTinTaiKhoan';
import NhaXeChiTiet from './components/web/NhaXeChiTiet';
import NhaXeDanhGia from './components/web/NhaXeDanhGia';
import LichSuDatVe from './components/web/LichSuDatVe';
import TaiKhoanAddAdmin from './components/admin/TaiKhoan/TaiKhoanAddAdmin';
import TaiKhoanUser from './components/admin/TaiKhoan/TaiKhoanUser';
import TaiKhoanNhaXe from './components/admin/TaiKhoan/TaiKhoanNhaXe';
import LoaiXeAdmin from './components/admin/LoaiXe/LoaiXeAdmin';
import XeAdmin from './components/admin/Xe/XeAdmin';
import XeAdminAdd from './components/admin/Xe/XeAdminAdd';
import useToken from './components/hooks/useToken';
import { createContext } from 'react';
import LichSuGuiHang from './components/web/LichSuGuiHang';
import XeNhaXe from './components/nhaXe/Xe/XeNhaXe';
import VeXeChiTiet from './components/web/VeXeChiTiet';
import VeXe from './components/nhaXe/VeXe/VeXe';
import HangHoa from './components/nhaXe/HangHoa/HangHoa';
import QuanLyVeXe from './components/nhaXe/VeXe/QuanLyVeXe';
import GiaoHang from './components/web/GiaoHang';
import QuanLyHangHoa from './components/nhaXe/HangHoa/QuanLyHangHoa';
import ThongKeNhaXe from './components/nhaXe/ThongKe/ThongKeNhaXe';
import ThongKeAdmin from './components/admin/ThongKe/ThongKeAdmin';

export const MyContext = createContext();

function App() {


  const {token, account, setToken, setAccount} = useToken();

  if(!account){
      return(
        <MyContext.Provider value={{token, setToken, account, setAccount}}>
        <BrowserRouter>
        <Routes>
        <Route path='/*' element={<LayoutWeb></LayoutWeb>}>
            <Route path='' element={<Home></Home>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='sign-up' element={<Signup></Signup>}></Route>
            <Route path='lich-trinh' element={<LichTrinh></LichTrinh>}></Route>
            <Route path='tuyen-xe' element={<TuyenXe></TuyenXe>}></Route>
            <Route path='dat-ve-xe/:id' element={<DatVe></DatVe>}></Route>
            <Route path='thong-tin-tai-khoan' element={<ThongTinTaiKhoan></ThongTinTaiKhoan>}></Route>
            <Route path='nha-xe-chi-tiet/:id' element={<NhaXeChiTiet></NhaXeChiTiet>}></Route>
            <Route path='nha-xe-danh-gia/:id' element={<NhaXeDanhGia></NhaXeDanhGia>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Route>
        </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    )
  } else {
    if(account.role==="ADMIN"){
      return(
        <MyContext.Provider value={{token, setToken, account, setAccount}}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Navigate to="/admin/home" replace />}></Route>
            <Route path="/admin/*" element={<LayoutAdmin account={account}></LayoutAdmin>}>
              <Route path='home' element={<AdminHome></AdminHome>}></Route>
              <Route path='thong-tin-tai-khoan' element={<ThongTinTaiKhoan></ThongTinTaiKhoan>}></Route>
              <Route path='nha-xe' element={<NhaXeAdmin></NhaXeAdmin>}></Route>
              <Route path='nha-xe/update' element={<NhaXeAdminUpdate></NhaXeAdminUpdate>}></Route>
              <Route path='nha-xe/add' element={<NhaXeAdminAdd></NhaXeAdminAdd>}></Route>
              <Route path='tuyen-xe' element={<TuyenXeAdmin></TuyenXeAdmin>}></Route>
              <Route path='tuyen-xe/update/:id' element={<TuyenXeAdminUpdate></TuyenXeAdminUpdate>}></Route>
              <Route path='tuyen-xe/add' element={<TuyenXeAdminAdd></TuyenXeAdminAdd>}></Route>
              <Route path='ben-xe' element={<BenXeAdmin></BenXeAdmin>}></Route>
              <Route path='tai-khoan/user' element={<TaiKhoanUser></TaiKhoanUser>}></Route>
              <Route path='tai-khoan/nha-xe' element={<TaiKhoanNhaXe></TaiKhoanNhaXe>}></Route>
              <Route path='tai-khoan/admin' element={<TaiKhoanAdmin></TaiKhoanAdmin>}></Route>
              <Route path='tai-khoan/add' element={<TaiKhoanAddAdmin></TaiKhoanAddAdmin>}></Route>
              <Route path='loai-xe' element={<LoaiXeAdmin></LoaiXeAdmin>}></Route>
              <Route path='xe' element={<XeAdmin></XeAdmin>}></Route>
              <Route path='xe/add' element={<XeAdminAdd></XeAdminAdd>}></Route>
              <Route path='thong-ke' element={<ThongKeAdmin></ThongKeAdmin>}></Route>
              {/*<Route path="*" element={<Navigate to="home" replace />}></Route>*/}
            </Route>
          </Routes>
        </BrowserRouter>
        </MyContext.Provider>)
      }else if(account.role==="NHAXE"){
        return(
          <MyContext.Provider value={{token, setToken, account, setAccount}}>
          <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Navigate to="/nha-xe/home" replace />}></Route>
            <Route path='/nha-xe/*' element={<LayoutNhaXe account={account}></LayoutNhaXe>}>
                <Route path="home" element={<NhaXeHome></NhaXeHome>} />
                <Route path='thong-tin-tai-khoan' element={<ThongTinTaiKhoan></ThongTinTaiKhoan>}></Route>
                <Route path="tuyen-xe" element={<TuyenXeNhaXe></TuyenXeNhaXe>} />
                <Route path="xe" element={<XeNhaXe></XeNhaXe>} />
                <Route path="ve-xe" element={<VeXe></VeXe>} />
                <Route path="ve-xe/quan-ly/:id" element={<QuanLyVeXe></QuanLyVeXe>} />
                <Route path="hang-hoa" element={<HangHoa></HangHoa>} />
                <Route path="hang-hoa/quan-ly/:id" element={<QuanLyHangHoa></QuanLyHangHoa>} />
                <Route path="thong-ke" element={<ThongKeNhaXe></ThongKeNhaXe>} />
                <Route path="*" element={<Navigate to="home" replace />}></Route>
            </Route>
          </Routes>
          </BrowserRouter>
          </MyContext.Provider>
        )
      }else {
        return(
          <MyContext.Provider value={{token, setToken, account, setAccount}}>
          <BrowserRouter>
          <Routes>
            <Route path='/*' element={<LayoutWeb account={account}></LayoutWeb>}>
                <Route path='' element={<Home></Home>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='sign-up' element={<Signup></Signup>}></Route>
                <Route path='lich-trinh' element={<LichTrinh></LichTrinh>}></Route>
                <Route path='tuyen-xe' element={<TuyenXe></TuyenXe>}></Route>
                <Route path='dat-ve-xe/:id' element={<DatVe></DatVe>}></Route>
                <Route path='thong-tin-tai-khoan' element={<ThongTinTaiKhoan></ThongTinTaiKhoan>}></Route>
                <Route path='nha-xe-chi-tiet/:id' element={<NhaXeChiTiet></NhaXeChiTiet>}></Route>
                <Route path='nha-xe-danh-gia/:id' element={<NhaXeDanhGia></NhaXeDanhGia>}></Route>
                <Route path='lich-su-dat-ve' element={<LichSuDatVe></LichSuDatVe>}></Route>
                <Route path='lich-su-gui-hang' element={<LichSuGuiHang></LichSuGuiHang>}></Route>
                <Route path='ve-xe-chi-tiet' element={<VeXeChiTiet></VeXeChiTiet>}></Route>
                <Route path='giao-hang/:id' element={<GiaoHang></GiaoHang>}></Route>
                <Route path="*" element={<Navigate to="/" replace />}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
        </MyContext.Provider>
      )
    }
  }
}

export default App;