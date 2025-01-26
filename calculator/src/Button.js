import { useState } from "react";

// can attempt to add fade in animation to change color when hover
function Button(props){
    // const [isHover, setIsHover] = useState(false);
    // const handleMouseEnter = () => {setIsHover(true);};
    // const handleMouseLeave = () => {setIsHover(false);};
    const [isClicked, SetIsClicked] = useState(false);
    const handleMouseClick = () => {
        props.handle(props.element);
        SetIsClicked(true);
    };
    const handleMouseRelease = () => {SetIsClicked(false);};
    const handleKeyPress = (event) => {
        event.key === props.element && props.handle(props.element);
        event.key === props.element && SetIsClicked(true);
    };
    const handleKeyRelease = (event) => { event.key === props.element && SetIsClicked(false);};

    const divStyle = {
        width: "100px",
        height: "80px",
        border: "none",
        borderRadius: "15%",
        margin: "5px"
    }

    const butStyle = {
        backgroundColor: isClicked? "#bb4430": "#231f20",
        color: "white",
        border: "none",
        borderRadius: "15%",
        margin: "0",
        width: "100%",
        height: "100%",
        fontReight: "bold",
        fontSize: "40px"
    }

    return (
        <div style={divStyle}>
            <button style={butStyle} onMouseDown={handleMouseClick} onMouseUp={handleMouseRelease} onKeyDown={handleKeyPress} onKeyUp={handleKeyRelease}>
                {props.element}
            </button>
        </div>
    )
}

export default Button;