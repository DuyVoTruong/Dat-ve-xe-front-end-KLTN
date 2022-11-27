const API_URL = 'http://localhost:8080/api'

//BenXe
function httpGetBenXe(){
    return fetch(`${API_URL}/benxe/all`).then(res=>res.json())
}

function httpGetBenXeById(id){
    return fetch(`${API_URL}/benxe/${id}`).then(res=>res.json())
}

function httpPostBenXe(data){
    return fetch(`${API_URL}/benxe/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpPutBenXe(data, idBenXe){
    return fetch(`${API_URL}/benxe/${idBenXe}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

function httpDeleteBenXe(idBenXe){
    return fetch(`${API_URL}/benxe/${idBenXe}`, {
        method: "Delete",
    })
}


//Nha Xe
function httpGetNhaXe(){
    return fetch("/data/nhaXe.json").then(res=>res.json())
}

//Tuyen Xe
function httpGetTuyenXe(){
    return fetch("/data/tuyenXe.json").then(res=>res.json())
}

//Loai Xe
function httpGetLoaiXe(){
    return fetch("/data/loaiXe.json").then(res=>res.json())
}

//Xe
function httpGetXe(){
    return fetch("/data/xe.json").then(res=>res.json())
}

//Hinh Thuc Thanh Toan
function httpGetHinhThucThanhToan(){
   return fetch("/data/hinhThucThanhToan.json").then(res=>res.json())
}

//Ve Xe
function httpGetVeXe(){
    return fetch("/data/veXe.json").then(res=>res.json())
}

export {
    //BenXe
    httpGetBenXe,
    httpGetBenXeById,
    httpPostBenXe,
    httpPutBenXe,
    httpDeleteBenXe,
    
    //NhaXe
    httpGetNhaXe,

    //TuyenXe
    httpGetTuyenXe,

    //Xe
    httpGetXe,

    //Loai Xe
    httpGetLoaiXe,

    //Hinh Thuc Thanh Toan
    httpGetHinhThucThanhToan,

    //Ve Xe
    httpGetVeXe
}