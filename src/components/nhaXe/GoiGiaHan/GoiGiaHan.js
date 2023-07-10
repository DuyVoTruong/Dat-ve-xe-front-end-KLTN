import { Card, Col, Container, Row } from "react-bootstrap";
import '../../../css/goi-dich-vu.css'
import { useTranslation } from "react-i18next";

const GoiGiaHan =()=>{
    const goiGiaHan = [{
        "name": "1 Tháng",
        "value": 1000000,
    },{
        "name": "3 Tháng",
        "value": 2900000,
    },{
        "name": "6 Tháng",
        "value": 5700000,
    },{
        "name": "12 Tháng",
        "value": 11000000,
    }]

const mau = ["#FFCCCC","#FFCC99","#FFCC66","#FFCC33"]

    const {t} = useTranslation();

    return(
        <>
            <Container>
            <Row style={{margin: "30vh 5vw"}}>
            {
                goiGiaHan.map((ggh,index)=>{
                    return(
                        <>
                        <Col md={6}>
                            <Card className="card" style={{margin:"15px", backgroundColor: mau[index]}}>
                            <Card.Body>
                                <Card.Title>
                                    {t(`${ggh.name}`)}
                                </Card.Title>
                                    {ggh.value}
                            </Card.Body>
                            </Card>
                        </Col>
                        </>
                    )
                })
            }
            </Row>
            </Container>
        </>
    )
}

export default GoiGiaHan;