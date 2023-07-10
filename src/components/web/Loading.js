import { Spinner } from "react-bootstrap";

const Loading =()=>{
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

export default Loading;