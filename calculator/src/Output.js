//import { useState } from "react";

function Output(props){
    //const [calculation, setCalculation] = useState("");


    const outputStyle = {
        backgroundColor: "white",
        border: "3px",
        borderRadius: "15px",
        borderStyle: "solid",
        borderColor: "#231f20",
        width: "50%",
        height: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "10px 10px #7EBDC2",
        marginTop: "20px",
        marginBottom: "30px"
    }

    const calculationStyle = {
        height: "40%",
        fontSize: "30px",
        padding: "10px",
        overflow: "auto"
    }

    const answerStyle = {
        height: "60%",
        fontSize: "60px",
        padding: "10px",
        overflow: "auto",
        textAlign: "Right",
        marginTop: "-30px"
    }

    return (
        <div style={outputStyle}>
            <div style={calculationStyle}>{props.cal}</div>
            <div style={answerStyle}>{props.res}</div>
        </div>
    )
}

export default Output;