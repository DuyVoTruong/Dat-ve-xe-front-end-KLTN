const { httpGetBenXeById, httpGetLoaiXeById, httpGetBenXeUser, httpGetNhaXeById, httpGetAllDanhGiaByIdNhaXe, httpGetTuyenXeFindByAddress, httpGetAllVeXeByTuyenXeId, httpGetTuyenXeById, httpGetNhaXeUserById, httpGetNhaXeUserAll, httpGetVeXeUserById, httpGetTuyenXeFindByAddressDate, httpGetSaoTrungBinhNhaXe, httpGetHangHoaByUserId, httpGetHangHoaByTuyenXeId } = require("./Request");

export const getTinhThanhPho=()=>{
    var citis = document.getElementById("city");
    var districts = document.getElementById("district");
    var wards = document.getElementById("ward");

    fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",{
        method: "GET"
    }).then(res=>res.json()).then(data=>{
        renderCity(data);})

    function renderCity(data) {
        if(citis.options.length<=63){
            for (const x of data) {
            citis.options[citis.options.length] = new Option(x.Name, x.Id);
            }
            citis.onchange = function () {
            document.getElementById('district').length = 1;
            document.getElementById('ward').length = 1;
            if(this.value != ""){
                const result = data.filter(n => n.Id === this.value);
        
                for (const k of result[0].Districts) {
                document.getElementById('district').options[document.getElementById('district').options.length] = new Option(k.Name, k.Id);
                }
            }
            };
            document.getElementById('district').onchange = function () {
            document.getElementById('ward').length = 1;
            const dataCity = data.filter((n) => n.Id === citis.value);
            if (this.value != "") {
                const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
        
                for (const w of dataWards) {
                wards.options[wards.options.length] = new Option(w.Name, w.Id);
                }
            }
            };
        }
    }
}

export const getBenXeById = async(id) => {
    const res = await httpGetBenXeById(id);
    if (res.status==200){
        return res.object
    }
}

export const getLoaiXeById = async(id) => {
    const res = await httpGetLoaiXeById(id);
    if (res.status==200){
        return res.object
    }
}

export const getNhaXeById = async(id) => {
    const res = await httpGetNhaXeById(id);
    if (res.status==200){
        return res.object
    }
}

export const getAllBenXeUser = async() => {
    const res = await httpGetBenXeUser();
    if (res.status == 200){
        return res.object
    }
   
};

export const getAllDanhGiaByIdNhaXe = async(id, token) => {
    const res = await httpGetAllDanhGiaByIdNhaXe(id, token);
    if (res.status == 200){
        return res.object
    }
   
};

export const getTuyenXeFindByAddress = async(data) => {
    const res = await httpGetTuyenXeFindByAddress(data);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
   
};

export const getAllVeXeByTuyenXeId = async(id, token) => {
    const res = await httpGetAllVeXeByTuyenXeId(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getTuyenXeById = async(id, token) => {
    const res = await httpGetTuyenXeById(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getNhaXeUserById = async(id, token) => {
    const res = await httpGetNhaXeUserById(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getNhaXeUserAll = async(token) => {
    const res = await httpGetNhaXeUserAll(token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getVeXeUserById = async(id, token) => {
    const res = await httpGetVeXeUserById(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getTuyenXeFindByAddressDate = async(data, token) => {
    console.log(data)
    const res = await httpGetTuyenXeFindByAddressDate(data, token);
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getSaoTrungBinhNhaXe = async(id) => {
    const res = await httpGetSaoTrungBinhNhaXe(id);
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getHangHoaByUserId = async(id, token) => {
    const res = await httpGetHangHoaByUserId(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};

export const getHangHoaByTuyenXeId = async(id, token) => {
    const res = await httpGetHangHoaByTuyenXeId(id, token);
    console.log(res)
    if (res.status == 200){
        console.log(res.object)
        return res.object
    }
};
