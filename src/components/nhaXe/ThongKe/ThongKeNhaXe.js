import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import BarChart from "../../thongKe/BarChart";
import { Button, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import PieChart from "../../thongKe/PieChart";
import { MyContext } from "../../../App";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import InfoMessage from "../../alert message/InfoMessage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ThongKeNhaXe =()=>{

    const token = useContext(MyContext).token;
    const account = useContext(MyContext).account;
    const [dataBar, setDataBar] = useState({});
    const [optionsBar, setOptionsBar] = useState({});
    const [dataPie, setDataPie] = useState([]);
    const [optionsPie, setOptionsPie] = useState([]);
    const [loaiXe, setLoaiXe] = useState([]);
    const [tuyenXe, setTuyenXe] = useState([]);
    const [show, setShow] = useState(false);

    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const {t} = useTranslation();

    useEffect(()=>{
      if(Number(month)&&Number(year)){
        fetch("http://localhost:8081/api/thongke/nhaxe/loai-xe",{
          method: "POST",
          headers: {
              'Authorization': 'Bearer ' + token,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({month, year, nhaXeId: account.id}),
        }).then(res=>res.json()).then(data=>{
          if(data.status==200){
            setLoaiXe(data.object);
          }
        })

        fetch("http://localhost:8081/api/thongke/nhaxe/tuyenxe",{
          method: "POST",
          headers: {
              'Authorization': 'Bearer ' + token,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({month, year, nhaXeId: account.id}),
        }).then(res=>res.json()).then(data=>{
          if(data.status==200){
            setTuyenXe(data.object);
          }
        })
      }
    },[month, year])

    const thongKeTheoLoaiXe =()=>{
      if(!Number(month)||!Number(year)){
        InfoMessage(t("Tháng và năm phải là số"));
      }else if(Number(month)>12||Number(month)<0){
        InfoMessage(t("Tháng phải nằm trong khoảng từ 1 đến 12"))
      }
      else{
        setDataBar({
          labels: loaiXe.map(lx=>lx.tenLoaiXe),
          datasets: [
            {
              label: t("Doanh thu (đơn vị: đồng)"),
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: loaiXe.map(lx=>lx.tongDoanhThu)
            }
          ]
        });

        setDataPie({
          labels: loaiXe.map(lx=>lx.tenLoaiXe),
          datasets: [
            {
              label: t("Tỷ lệ (đơn vị: %)"),
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: loaiXe.map(lx=>lx.tyLe)
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
              text: t("Doanh thu theo loại xe")
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
              text: t("Tỷ lệ phần trăm doanh thu theo loại xe")
            }
          }
        });
        setShow("LoaiXe");
      }
    }

    const thongKeTheoTuyenXe =()=>{
      if(!Number(month)||!Number(year)){
        InfoMessage(t("Tháng và năm phải là số"));
      }else if(Number(month)>12||Number(month)<0){
        InfoMessage(t("Tháng phải nằm trong khoảng từ 1 đến 12"))
      }
      else{
        setDataBar({
          labels: tuyenXe.map(tx=>{return(tx.tinhThanhDi+ " " + t("đến") + " " + tx.tinhThanhDen)}),
          datasets: [
            {
              label: t("Doanh thu (đơn vị: đồng)"),
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: tuyenXe.map(tx=>tx.tongDoanhThu)
            }
          ]
        });
  
        setDataPie({
          labels: tuyenXe.map(tx=>{return(tx.tinhThanhDi+" đến "+tx.tinhThanhDen)}),
          datasets: [
            {
              label: t("Tỷ lệ (đơn vị: %)"),
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850"
              ],
              data: tuyenXe.map(tx=>tx.tyLe)
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
              text: t("Doanh thu theo tuyến xe")
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
              text: t("Tỷ lệ phần trăm doanh thu theo tuyến xe")
            }
          }
        });
        setShow("TuyenXe");
      }
    }

    return(
        <>
        <ToastContainer/>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h1>{t("Thống kê")}</h1></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display:"flex"}}>
          <Form.Label style={{margin:"15px"}}>{t("Tháng")}:</Form.Label>
          <Form.Control onChange={e=>setMonth(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder={t("Nhập tháng cần thống kê")}></Form.Control>
          <Form.Label style={{margin:"15px"}}>{t("Năm")}:</Form.Label>
          <Form.Control onChange={e=>setYear(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder={t("Nhập năm cần thống kê")}></Form.Control>
        </div>
        <div style={{display:"flex"}}>
          <Button style={{margin: "10px"}} onClick={thongKeTheoLoaiXe}>{t("Thống kê theo loại xe")}</Button>
          <Button style={{margin: "10px"}} onClick={thongKeTheoTuyenXe}>{t("Thống kê theo tuyến xe")}</Button>
        </div>
          {
            (()=>{
              if(show==="LoaiXe"){
                return(
                  <>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{margin: "20px", border: "1px solid black", height:"40vh", width:"30vw", padding: "1%"}}>
                      <BarChart data={dataBar} options={optionsBar}></BarChart>
                    </div>
                    <div style={{margin: "20px", border: "1px solid black", height:"40vh", width:"30vw", padding: "1%"}}>
                      <PieChart data={dataPie} options={optionsPie}></PieChart>
                    </div>
                  </div>
                  </>
                )
              }else if(show==="TuyenXe"){
                return(
                  <>
                  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{margin: "20px", border: "1px solid black", height:"40vh", width:"30vw", padding: "1%"}}>
                      <BarChart data={dataBar} options={optionsBar}></BarChart>
                    </div>
                    <div style={{margin: "20px", border: "1px solid black", height:"40vh", width:"30vw", padding: "1%"}}>
                      <PieChart data={dataPie} options={optionsPie}></PieChart>
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

export default ThongKeNhaXe;