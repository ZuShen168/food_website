import { useState } from "react";

// can attempt to add fade in animation to change color when hover
function Delete(props){
    // const [isHover, setIsHover] = useState(false);
    // const handleMouseEnter = () => {setIsHover(true);};
    // const handleMouseLeave = () => {setIsHover(false);};
    const [isClicked, SetIsClicked] = useState(false);
    const handleMouseClick = () => {
        props.handle3();
        SetIsClicked(true);
    };
    const handleMouseRelease = () => {SetIsClicked(false);};

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
            <button style={butStyle} onMouseDown={handleMouseClick} onMouseUp={handleMouseRelease}>
                {props.element}
            </button>
        </div>
    )
}

export default Delete;