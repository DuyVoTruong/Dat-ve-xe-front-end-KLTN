import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../../App";
import BarChart from "../../thongKe/BarChart";
import PieChart from "../../thongKe/PieChart";
import { useTranslation } from "react-i18next";

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
    const {t} = useTranslation();

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
        window.alert(("thangvanamphailaso"));
      }else if(Number(month)>12||Number(month)<0){
        window.alert(t("thangphainamtrongkhoangtu1den12"))
      }
      else{

        setDataBar({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: t("sovebanduoc"),
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
              label: t("tyle"),
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
              text: t("sovebanduoccuacacnhaxe")
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
              text: t("tylephantramsovebanduoccuacacnhaxe")
            }
          }
        });

        setDataBar1({
          labels: soDon.map(sd=>sd.tenNhaXe),
          datasets: [
            {
              label: t("sohanghoaduocgiao"),
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
              label: t("tyle"),
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
              text: t("tylephantramsohanghoaduocgiaocuacacnhaxe")
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
              text: t("sohanghoaduocgiaocuacacnhaxe")
            }
          }
        });
  
        setShow("TanSuat");
      }
    }

    const thongKeTheoDoanhThu =()=>{
      if(!Number(month)||!Number(year)){
        window.alert(t("thangvanamphailaso"));
      }else if(Number(month)>12||Number(month)<0){
        window.alert(t("thangphainamtrongkhoangtu1den12"))
      }
      else{
        setDataBar({
          labels: doanhThu.map(dt=>dt.tenNhaXe),
          datasets: [
            {
              label: t("doanhthu"),
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
              label: t("tyle"),
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
              text: t("doanhthucuacacnhaxe")
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
              text: t("tylephantramdoanhthucuacacnhaxe")
            }
          }
        });
        setShow("DoanhThu");
      }
    }

    return(
        <>
        <div style={{textAlign: "center", marginBottom:"30px", marginTop:"20px"}}><h1>{t("thongke")}</h1></div>
        <div style={{margin: "20px", backgroundColor:"white", borderRadius: "5px"}} className="shadow">
        <div style={{display:"flex"}}>
          <Form.Label style={{margin:"15px"}}>Tháng:</Form.Label>
          <Form.Control onChange={e=>setMonth(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder={t("nhapthangcanthongke")}></Form.Control>
          <Form.Label style={{margin:"15px"}}>Năm:</Form.Label>
          <Form.Control onChange={e=>setYear(e.target.value)} type="text" style={{margin: "10px", width:"20%"}} placeholder={t("nhapnamcanthongke")}></Form.Control>
        </div>
        <div style={{display:"flex"}}>
          <Button style={{margin: "10px"}} onClick={thongKeTheoTanSuatSuDung}>{t("thongketansuatsudung")}</Button>
          <Button style={{margin: "10px"}} onClick={thongKeTheoDoanhThu}>{t("thongkedoanhthu")}</Button>
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