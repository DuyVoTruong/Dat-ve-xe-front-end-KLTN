const API_URL = 'http://localhost:8081/api'

//BenXe
async function httpGetBenXeAdmin(token){
    const res = await fetch(`${API_URL}/benxe/all-admin`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetBenXeUser(token){
    const res = await fetch(`${API_URL}/benxe/all-user`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetBenXe(token){
    const res = await fetch(`${API_URL}/benxe/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetBenXeById(id, token){
    const res = await fetch(`${API_URL}/benxe/benxeid/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostBenXe(data, token){
    return fetch(`${API_URL}/benxe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutBenXe(id, data, token){
    return fetch(`${API_URL}/benxe/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteBenXe(id, token){
    return fetch(`${API_URL}/benxe/${id}`, {
        method: "Delete",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    })
}


//Nha Xe
async function httpGetNhaXe(token){
    const res = await fetch(`${API_URL}/nhaxe/admin/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetNhaXeUserAll(token){
    const res = await fetch(`${API_URL}/nhaxe/user/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetNhaXeUserById(id, token){
    const res = await fetch(`${API_URL}/nhaxe/user/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetNhaXeById(id, token){
    const res = await fetch(`${API_URL}/nhaxe/admin/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostNhaXe(data, token){
    return fetch(`${API_URL}/nhaxe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutNhaXe(id, data, token){
    return fetch(`${API_URL}/nhaxe/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteNhaXe(id, token){
    return fetch(`${API_URL}/benxe/benxeid/${id}`, {
        method: "Delete",
    })
}


//Tuyen Xe
async function httpGetTuyenXe(token){
    const res = await fetch(`${API_URL}/tuyenxe/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetTuyenXeAdmin(token){
    const res = await fetch(`${API_URL}/tuyenxe/admin/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetTuyenXeById(id, token){
    const res = await fetch(`${API_URL}/tuyenxe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetTuyenXeFindByAddress(data, token){
    const res = await fetch(`${API_URL}/tuyenxe/find-by-address`,{
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}

async function httpGetTuyenXeFindByAddressDate(data,token){
    const res = await fetch(`${API_URL}/tuyenxe/find-by-address-date`,{
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await res.json();
}

function httpPostTuyenXe(data, token){
    return fetch(`${API_URL}/tuyenxe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutTuyenXe(id, data, token){
    return fetch(`${API_URL}/tuyenxe/update/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteTuyenXe(id, token){
    return fetch(`${API_URL}/tuyenxe/${id}`, {
        method: "Delete",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    })
}


//Loai Xe
async function httpGetLoaiXe(token){
    const res = await fetch(`${API_URL}/loaixe/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetLoaiXeById(id, token){
    const res = await fetch(`${API_URL}/loaixe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostLoaiXe(data, token){
    return fetch(`${API_URL}/loaixe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data, token),
    });
}

function httpPutLoaiXe(id, data, token){
    return fetch(`${API_URL}/loaixe/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteLoaiXe(id, token){
    return fetch(`${API_URL}/loaixe/${id}`, {
        method: "Delete",
    })
}


//Xe
async function httpGetXe(token){
    const res = await fetch(`${API_URL}/xe/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetXeNhaXe(id,token){
    const res = await fetch(`${API_URL}/xe/nhaxe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetXeById(id, token){
    const res = await fetch(`${API_URL}/xe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostXe(data, token){
    return fetch(`${API_URL}/xe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutXe(id, data, token){
    return fetch(`${API_URL}/xe/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteXe(id, token){
    return fetch(`${API_URL}/xe/${id}`, {
        method: "Delete",
    })
}


//Hinh Thuc Thanh Toan
async function httpGetHinhThucThanhToan(token){
    const res = await fetch(`${API_URL}/hinhthucthanhtoan/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetHinhThucThanhToanById(id, token){
    const res = await fetch(`${API_URL}/hinhthucthanhtoan/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostHinhThucThanhToan(data, token){
    return fetch(`${API_URL}/hinhthucthanhtoan/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutHinhThucThanhToan(id, data, token){
    return fetch(`${API_URL}/hinhthucthanhtoan/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteHinhThucThanhToan(id, token){
    return fetch(`${API_URL}/hinhthucthanhtoan/${id}`, {
        method: "Delete",
    })
}


//Ve Xe
async function httpGetVeXe(id,token){
    const res = await fetch(`${API_URL}/vexe/user-id/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetVeXeUserById(id, token){
    const res = await fetch(`${API_URL}/vexe/user-id/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetAllVeXeByTuyenXeId(id, token){
    const res = await fetch(`${API_URL}/vexe/tuyenxe-id/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetVeXeById(id, token){
    const res = await fetch(`${API_URL}/vexe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostVeXe(data, token){
    return fetch(`${API_URL}/vexe/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutVeXe(id, data, token){
    return fetch(`${API_URL}/vexe/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteVeXe(id, token){
    return fetch(`${API_URL}/vexe/${id}`, {
        method: "Delete",
    })
}

// Tai Khoan
async function httpGetTaiKhoan(token){
    const res = await fetch(`${API_URL}/taikhoan/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetTaiKhoanById(id, token){
    const res = await fetch(`${API_URL}/taikhoan/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostTaiKhoan(data, token){
    return fetch(`${API_URL}/taikhoan/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutTaiKhoan(id, data, token){
    return fetch(`${API_URL}/taikhoan/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteTaiKhoan(id, token){
    return fetch(`${API_URL}/taikhoan/${id}`, {
        method: "Delete",
    })
}

//User
async function httpGetUser(token){
    const res = await fetch(`${API_URL}/user/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetUserById(id, token){
    const res = await fetch(`${API_URL}/user/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostUser(data, token){
    return fetch(`${API_URL}/user/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutUser(id, data, token){
    return fetch(`${API_URL}/user/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteUser(id, token){
    return fetch(`${API_URL}/user/${id}`, {
        method: "Delete",
    })
}

//Admin
async function httpGetAdmin(token){
    const res = await fetch(`${API_URL}/admin/all`,{
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        }
    });
    return await res.json();
}

async function httpGetAdminById(id, token){
    const res = await fetch(`${API_URL}/admin/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostAdmin(data, token){
    return fetch(`${API_URL}/admin/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpPutAdmin(id, data, token){
    return fetch(`${API_URL}/admin/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteAdmin(id, token){
    return fetch(`${API_URL}/admin/${id}`, {
        method: "Delete",
    })
}

//Danh Gia
async function httpGetDanhGia(token){
    const res = await fetch(`${API_URL}/danhgia/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetDanhGiaById(id, token){
    const res = await fetch(`${API_URL}/danhgia/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetAllDanhGiaByIdNhaXe(id, token){
    const res = await fetch(`${API_URL}/danhgia/nhaxe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetSaoTrungBinhNhaXe(id){
    const res = await fetch(`${API_URL}/thongke/nhaxe/sao-trung-binh/${id}`,{
        method: "GET",
    });
    return await res.json();
}

function httpPostDanhGia(data, token){
    return fetch(`${API_URL}/danhgia/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data, token),
    });
}

function httpPutDanhGia(id, data, token){
    return fetch(`${API_URL}/danhgia/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteDanhGia(id, token){
    return fetch(`${API_URL}/danhgia/${id}`, {
        method: "Delete",
    })
}


//Hang hoa
async function httpGetHangHoa(token){
    const res = await fetch(`${API_URL}/hanghoa/all`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetHangHoaById(id, token){
    const res = await fetch(`${API_URL}/hanghoa/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetHangHoaByUserId(id, token){
    const res = await fetch(`${API_URL}/hanghoa/user/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

async function httpGetHangHoaByTuyenXeId(id, token){
    const res = await fetch(`${API_URL}/hanghoa/tuyenxe/${id}`,{
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    });
    return await res.json();
}

function httpPostHangHoa(data, token){
    return fetch(`${API_URL}/hanghoa/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data, token),
    });
}

function httpPutHangHoa(id, data, token){
    return fetch(`${API_URL}/hanghoa/${id}`, {
        method: "PUT",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteHangHoa(id, token){
    return fetch(`${API_URL}/hanghoa/${id}`, {
        method: "Delete",
    })
}

//Sign Up
function httpPostSignUp(data, token){
    return fetch(`${API_URL}/signup/add`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

//Login
function httpLogin(data){
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpRequestForgetPassword(data){
    return fetch(`${API_URL}/request-forget-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpForgetPassword(data){
    return fetch(`${API_URL}/forget-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpVerifyEmail(data){
    return fetch(`${API_URL}/signup/verify-email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpLoginGoogleUpdate(data, token){
    return fetch(`${API_URL}/login-google/update`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpRequestGiaHan(data, token){
    return fetch(`${API_URL}/thanh-toan/le-phi`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function httpThanhToanDatVe(data, token){
    return fetch(`${API_URL}/thanh-toan/dat-ve`, {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export {
    //BenXe
    httpGetBenXeAdmin,
    httpGetBenXeUser,
    httpGetBenXe,
    httpGetBenXeById,
    httpPostBenXe,
    httpPutBenXe,
    httpDeleteBenXe,
    
    //NhaXe
    httpGetNhaXe,
    httpGetNhaXeUserAll,
    httpGetNhaXeUserById,
    httpGetNhaXeById,
    httpPostNhaXe,
    httpPutNhaXe,
    httpDeleteNhaXe,

    //TuyenXe
    httpGetTuyenXe,
    httpGetTuyenXeById,
    httpGetTuyenXeFindByAddress,
    httpGetTuyenXeFindByAddressDate,
    httpPostTuyenXe,
    httpPutTuyenXe,
    httpDeleteTuyenXe,
    httpGetTuyenXeAdmin,

    //Loai Xe
    httpGetLoaiXe,
    httpGetLoaiXeById,
    httpPostLoaiXe,
    httpPutLoaiXe,
    httpDeleteLoaiXe,

    //Xe
    httpGetXe,
    httpGetXeNhaXe,
    httpGetXeById,
    httpPostXe,
    httpPutXe,
    httpDeleteXe,

    //Hinh Thuc Thanh Toan
    httpGetHinhThucThanhToan,
    httpGetHinhThucThanhToanById,
    httpPostHinhThucThanhToan,
    httpPutHinhThucThanhToan,
    httpDeleteHinhThucThanhToan,

    //Ve Xe
    httpGetVeXe,
    httpGetVeXeUserById,
    httpGetVeXeById,
    httpGetAllVeXeByTuyenXeId,
    httpPostVeXe,
    httpPutVeXe,
    httpDeleteVeXe,

    //Tai Khoan
    httpGetTaiKhoan,
    httpGetTaiKhoanById,
    httpPostTaiKhoan,
    httpPutTaiKhoan,
    httpDeleteTaiKhoan,

    //User
    httpGetUser,
    httpGetUserById,
    httpPostUser,
    httpPutUser,
    httpDeleteUser,

    //Admin
    httpGetAdmin,
    httpGetAdminById,
    httpPostAdmin,
    httpPutAdmin,
    httpDeleteAdmin,

    //Danh Gia
    httpGetDanhGia,
    httpGetDanhGiaById,
    httpPostDanhGia,
    httpPutDanhGia,
    httpDeleteDanhGia,
    httpGetAllDanhGiaByIdNhaXe,
    httpGetSaoTrungBinhNhaXe,

    //Hang hoa
    httpGetHangHoa,
    httpGetHangHoaById,
    httpGetHangHoaByUserId,
    httpGetHangHoaByTuyenXeId,
    httpPostHangHoa,
    httpPutHangHoa,
    httpDeleteHangHoa,

    //Sign Up
    httpPostSignUp,

    //Login
    httpLogin,
    httpLoginGoogleUpdate,

    //Forget Password
    httpRequestForgetPassword,
    httpForgetPassword,
    httpVerifyEmail,

    //Payment
    httpRequestGiaHan,
    httpThanhToanDatVe,
}