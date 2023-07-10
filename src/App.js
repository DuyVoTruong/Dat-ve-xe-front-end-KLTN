import './App.css';
import './css/searchForm.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import useToken from './components/hooks/useToken';
import React, { Suspense, createContext } from 'react';
import GoiGiaHan from './components/nhaXe/GoiGiaHan/GoiGiaHan';
import Loading from './components/web/Loading';
import UploadFile from './components/UploadFile';
import RequestForgetPassword from './components/web/RequestForgetPassword';
import ForgetPassword from './components/web/ForgetPassword';
const LayoutAdmin = React.lazy(() => import ('./layout/LayoutAdmin'));
const AdminHome = React.lazy(() => import ('./components/admin/AdminHome'));
const NhaXeAdmin = React.lazy(() => import ('./components/admin/NhaXe/NhaXeAdmin'));
const NhaXeAdminUpdate = React.lazy(() => import ('./components/admin/NhaXe/NhaXeAdminUpdate'));
const NhaXeAdminAdd = React.lazy(() => import ('./components/admin/NhaXe/NhaXeAdminAdd'));
const TuyenXeAdmin = React.lazy(() => import ('./components/admin/TuyenXe/TuyenXeAdmin'));
const TuyenXeAdminUpdate = React.lazy(() => import ('./components/admin/TuyenXe/TuyenXeAdminUpdate'));
const TuyenXeAdminAdd = React.lazy(() => import ('./components/admin/TuyenXe/TuyenXeAdminAdd'));
const BenXeAdmin = React.lazy(() => import ('./components/admin/BenXe/BenXeAdmin'));
const TaiKhoanAdmin = React.lazy(() => import ('./components/admin/TaiKhoan/TaiKhoanAdmin'));
const LayoutNhaXe = React.lazy(() => import ('./layout/LayoutNhaXe'));
const NhaXeHome = React.lazy(() => import ('./components/nhaXe/NhaXeHome'));
const TuyenXeNhaXe = React.lazy(() => import ('./components/nhaXe/TuyenXe/TuyenXeNhaXe'));
const LayoutWeb = React.lazy(() => import ('./layout/LayoutWeb'));
const Home = React.lazy(() => import ('./components/web/Home'));
const Login = React.lazy(() => import ('./components/web/Login'));
const Signup = React.lazy(() => import ('./components/web/Signup'));
const LichTrinh = React.lazy(() => import ('./components/web/LichTrinh'));
const TuyenXe = React.lazy(() => import ('./components/web/TuyenXe'));
const DatVe = React.lazy(() => import ('./components/web/DatVe'));
const ThongTinTaiKhoan = React.lazy(() => import ('./components/web/ThongTinTaiKhoan'));
const NhaXeChiTiet = React.lazy(() => import ('./components/web/NhaXeChiTiet'));
const NhaXeDanhGia = React.lazy(() => import ('./components/web/NhaXeDanhGia'));
const LichSuDatVe = React.lazy(() => import ('./components/web/LichSuDatVe'));
const TaiKhoanAddAdmin = React.lazy(() => import ('./components/admin/TaiKhoan/TaiKhoanAddAdmin'));
const TaiKhoanUser = React.lazy(() => import ('./components/admin/TaiKhoan/TaiKhoanUser'));
const TaiKhoanNhaXe = React.lazy(() => import ('./components/admin/TaiKhoan/TaiKhoanNhaXe'));
const LoaiXeAdmin = React.lazy(() => import ('./components/admin/LoaiXe/LoaiXeAdmin'));
const XeAdmin = React.lazy(() => import ('./components/admin/Xe/XeAdmin'));
const XeAdminAdd = React.lazy(() => import ('./components/admin/Xe/XeAdminAdd'));
const LichSuGuiHang = React.lazy(() => import ('./components/web/LichSuGuiHang'));
const XeNhaXe = React.lazy(() => import ('./components/nhaXe/Xe/XeNhaXe'));
const VeXeChiTiet = React.lazy(() => import ('./components/web/VeXeChiTiet'));
const VeXe = React.lazy(() => import ('./components/nhaXe/VeXe/VeXe'));
const HangHoa = React.lazy(() => import ('./components/nhaXe/HangHoa/HangHoa'));
const QuanLyVeXe = React.lazy(() => import ('./components/nhaXe/VeXe/QuanLyVeXe'));
const GiaoHang = React.lazy(() => import ('./components/web/GiaoHang'));
const QuanLyHangHoa = React.lazy(() => import ('./components/nhaXe/HangHoa/QuanLyHangHoa'));
const ThongKeNhaXe = React.lazy(() => import ('./components/nhaXe/ThongKe/ThongKeNhaXe'));
const ThongKeAdmin = React.lazy(() => import ('./components/admin/ThongKe/ThongKeAdmin'));

export const MyContext = createContext();

function App() {


  const {token, account, setToken, setAccount} = useToken();

  if(!account){
      return(
        <MyContext.Provider value={{token, setToken, account, setAccount}}>
        {/*<BrowserRouter>*/}
        <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path='/*' element={<LayoutWeb></LayoutWeb>}>
            <Route path='forget-password' element={<ForgetPassword></ForgetPassword>}></Route>
            <Route path='request-forget-password' element={<RequestForgetPassword></RequestForgetPassword>}></Route>
            <Route path='upload' element={<UploadFile></UploadFile>}></Route>
            <Route path='' element={<Home></Home>}></Route>
            {/*<Route path='login' element={<Login></Login>}></Route>*/}
            <Route path='sign-up' element={<Signup></Signup>}></Route>
            <Route path='lich-trinh' element={<LichTrinh></LichTrinh>}></Route>
            <Route path='tuyen-xe' element={<TuyenXe></TuyenXe>}></Route>
            <Route path='dat-ve-xe/:id' element={<DatVe></DatVe>}></Route>
            <Route path='thong-tin-tai-khoan' element={<ThongTinTaiKhoan></ThongTinTaiKhoan>}></Route>
            <Route path='nha-xe-chi-tiet/:id' element={<NhaXeChiTiet></NhaXeChiTiet>}></Route>
            <Route path='nha-xe-danh-gia/:id' element={<NhaXeDanhGia></NhaXeDanhGia>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        </Suspense>
        {/*</BrowserRouter>*/}
      </MyContext.Provider>
    )
  } else {
    if(account.role==="ADMIN"){
      return(
        <MyContext.Provider value={{token, setToken, account, setAccount}}>
        {/*<BrowserRouter>*/}
          <Suspense fallback={<Loading></Loading>}>
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
          </Suspense>
        {/*</BrowserRouter>*/}
        </MyContext.Provider>)
      }else if(account.role==="NHAXE"){
        return(
          <MyContext.Provider value={{token, setToken, account, setAccount}}>
          {/*<BrowserRouter>*/}
          <Suspense fallback={<Loading></Loading>}>
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
                <Route path="gia-han-dich-vu" element={<GoiGiaHan></GoiGiaHan>} />
                <Route path="*" element={<Navigate to="home" replace />}></Route>
            </Route>
          </Routes>
          </Suspense>
          {/*</BrowserRouter>*/}
          </MyContext.Provider>
        )
      }else {
        return(
          <MyContext.Provider value={{token, setToken, account, setAccount}}>
          {/*<BrowserRouter>*/}
          <Suspense fallback={<Loading></Loading>}>
          <Routes>
            <Route path='/*' element={<LayoutWeb account={account}></LayoutWeb>}>
              <Route path='' element={<Home></Home>}></Route>
              {/*<Route path='login' element={<Login></Login>}></Route>*/}
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
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
          </Suspense>
        {/*</BrowserRouter>*/}
        </MyContext.Provider>
      )
    }
  }
}

export default App;