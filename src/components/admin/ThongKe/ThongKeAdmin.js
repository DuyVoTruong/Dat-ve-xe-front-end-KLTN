import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../../App";
import BarChart from "../../thongKe/BarChart";
import PieChart from "../../thongKe/PieChart";

const ThongKeAdmin =()=>{
    const token = useContext(MyContext).token;
    const [dataBar, setDataBar] = useState({});
    const [optionsBar, setOptionsBar] = useState({});
    const [dataBar1, setDataBar1] = useState([]);
    const [optionsBar1, setOptionsBar1] = useState([]);
    const [dataBar2, setDataBar2] = useState([]);
    const [optionsBar2, setOptionsBar2] = useState([]);
    const [dataBar3, setDataBar3] = useState([]);
    const [optionsBar3, setOptionsBar3] = useState([]);

    const [dataPie, setDataPie] = useState([]);
    const [optionsPie, setOptionsPie] = useState([]);
    const [dataPie1, setDataPie1] = useState([]);
    const [optionsPie1, setOptionsPie1] = useState([]);

    const [show, setShow] = useState(false);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [soDon, setSoDon] = useState([]);
    const [doanhThu, setDoanhThu] = useState([]);

    useEffect(()=>{
      if(Number(month)&&Number(year)){
        fetch("http://localhost:8080/api/thongke/admin/so-don",{
          method: "POST",
          headers: {
              'Authorization': 'Bearer ' + token,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({month, year}),
        }).then(res=>res.json()).then(data=>{
          if(data.status==200){
            setSoDon(data.object);
          }
        })

        fetch("http://localhost:8080/api/thongke/admin/doanh-thu",{
          method: "POST",
          headers: {
              'Authorization': 'Bearer ' + token,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({month, year}),
        }).then(res=>res.json()).then(data=>{
          if(data.status==200){
            setDoanhThu(data.object);
          }
        })
      }
    },[month, year])

    const thongKeTheoTanSuatSuDung =()=>{

      if(!Number(month)||!Number(year)){
        window.alert("Tháng và năm phải là số!!!");
      }else if(Number(month)>12||Number(month)<0){
        window.alert("Tháng phải nằm trong khoảng từ 1 đến 12")
      }
      else{

        setDataBar({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: "Số vé bán được (đơn vị: vé)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: soDon.map(sd=>sd.soSuatVe)
            }
          ]
        });
  
        setDataPie({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: "Tỷ lệ (đơn vị: %)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: soDon.map(sd=>sd.tyLeVe)
            }
          ]
        });
  
        setOptionsBar({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Số vé bán được của các nhà xe"
            }
          }
        });
  
        setOptionsPie({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Tỷ lệ phần trăm số vé bán được của các nhà xe"
            }
          }
        });

        setDataBar1({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: "Số hàng hóa được giao (đơn vị: lượt)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: soDon.map(sd=>sd.soSuatHangHoa)
            }
          ]
        });

        setDataPie1({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: "Tỷ lệ (đơn vị: %)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: soDon.map(sd=>sd.tyLeVe)
            }
          ]
        });

        setOptionsPie1({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Tỷ lệ phần trăm số hàng hóa được giao của các nhà xe"
            }
          }
        });
  
        setOptionsBar1({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Số hàng hóa được giao của các nhà xe"
            }
          }
        });
  
        setShow("TanSuat");
      }
    }

    const thongKeTheoDoanhThu =()=>{
      if(!Number(month)||!Number(year)){
        window.alert("Tháng và năm phải là số!!!");
      }else if(Number(month)>12||Number(month)<0){
        window.alert("Tháng phải nằm trong khoảng từ 1 đến 12")
      }
      else{
        setDataBar({
          labels: doanhThu.map(dt=>dt.tenNhaXe),
          datasets: [
            {
              label: "Doanh thu (đơn vị: nghìn đồng)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: doanhThu.map(dt=>dt.doanhThu)
            }
          ]
        });
  
        setDataPie({
          labels: doanhThu.map(dt=>dt.tenNhaXe),
          datasets: [
            {
              label: "Tỷ lệ (đơn vị: %)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: doanhThu.map(dt=>dt.tyLeDoanhThu)
            }
          ]
        });
  
        setOptionsBar({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Doanh thu của các nhà xe"
            }
          }
        });
  
        setOptionsPie({
          responsive:true,
          plugins:{
            legend: {
              //display: false,
              position: "top"
            },
            title: {
              display: true,
              text: "Tỷ lệ phần trăm doanh thu của các nhà xe"
            }
          }
        });
        setShow("DoanhThu");
      }
    }

    return(
        <>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h1>Thống kê</h1></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display:"flex"}}>
          <Form.Label style={{margin:"15px"}}>Tháng:</Form.Label>
          <Form.Control onChange={e=>setMonth(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder="Nhập tháng cần thống kê"></Form.Control>
          <Form.Label style={{margin:"15px"}}>Năm:</Form.Label>
          <Form.Control onChange={e=>setYear(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder="Nhập năm cần thống kê"></Form.Control>
        </div>
        <div style={{display:"flex"}}>
          <Button style={{margin: "10px"}} onClick={thongKeTheoTanSuatSuDung}>Thống kê tần suất sử dụng</Button>
          <Button style={{margin: "10px"}} onClick={thongKeTheoDoanhThu}>Thống kê doanh thu</Button>
        </div>
          {
            (()=>{
              if(show==="DoanhThu"){
                return(
                  <>
                  <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <BarChart data={dataBar} options={optionsBar}></BarChart>
                    </div>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <PieChart data={dataPie} options={optionsPie}></PieChart>
                    </div>
                  </div>
                  </>
                )
              }
              else if(show==="TanSuat"){
                return(
                  <>
                  <div style={{display: "flex", overflow: "auto"}}>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <BarChart data={dataBar} options={optionsBar}></BarChart>
                    </div>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <PieChart data={dataPie} options={optionsPie}></PieChart>
                    </div>
                  </div>
                  <div style={{display: "flex"}}>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <BarChart data={dataBar1} options={optionsBar1}></BarChart>
                    </div>
                    <div style={{margin: "20px", border: "1px solid black", height:"500px", width:"550px"}}>
                      <PieChart data={dataPie1} options={optionsPie1}></PieChart>
                    </div>
                  </div>
                  </>
                )
              }
            })()
          }
        </div>
        </>
    );
}

export default ThongKeAdmin;