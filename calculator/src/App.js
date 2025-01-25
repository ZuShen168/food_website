import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import Button from './Button';
import Output from "./Output";
import Row from "./Row";

function App() {
  const [calculation, setCalculation] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = (value) => {
    setCalculation((prev) => prev + value);
  };

  const handleClick2 = () => {
    calculation.length && setCalculation((prev) => prev.substring(0,prev.length - 1));
  };

  const handleClick3 = () => {
    calculation.length && setCalculation("");
  };

  const handleClick4 = () => {
    if(calculation){
      try{
        let res = eval(calculation).toString();
        setAnswer(res);
      } catch (err){
        alert(err);
      }
    }
  };

  const handleClick5 = () => {
    setCalculation(answer);
    setAnswer("");
  };

  return (
    <div className="App">
      <Output cal={calculation} res={answer}/>
      <Row handle={[handleClick, handleClick2, handleClick3, handleClick4, handleClick5]} row={["7","8","9","DEL","AC"]} handleIdx={[0,0,0,1,2]}/>
      <Row handle={[handleClick, handleClick2, handleClick3, handleClick4, handleClick5]} row={["4","5","6","*","/"]} handleIdx={[0,0,0,0,0]}/>
      <Row handle={[handleClick, handleClick2, handleClick3, handleClick4, handleClick5]} row={["1","2","3","+","-"]} handleIdx={[0,0,0,0,0]}/>
      <Row handle={[handleClick, handleClick2, handleClick3, handleClick4, handleClick5]} row={["0",".","0","Ans","="]} handleIdx={[0,0,0,4,3]}/>
    </div>
  );
}

export default App;
