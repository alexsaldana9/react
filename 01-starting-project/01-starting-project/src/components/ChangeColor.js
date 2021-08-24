import React, { useState }from 'react';
import './ChangeColor.css'

const ChangeColor = props => {

    const [isBlue, setIsBlue] = useState(true);

    console.log("isBlue ----", isBlue);

    const changeColorHandler = () => {
        console.log("isBlue before >>", isBlue);
        console.log("Clicked button");

        if(isBlue) {
            setIsBlue(false);
        } else {
            setIsBlue(true);
        }
        console.log("isBlue >>", isBlue);
    }

    const renderColorDiv = () => {
        const divColorClass = isBlue ? 'blue-background' : 'red-background';
        if (isBlue) {
            return (<div className={divColorClass}>Change Color div 1</div>);
        }
        else {
            return (<div className={divColorClass}>Change Color div 2</div>);
        }
    }

    const changeItemColorHandler = () => {
        console.log("Clicked");
    }

return (
        <div>
            <button onClick={changeColorHandler}>Change Color</button>

            <br></br>
            <br></br>
            <br></br>            

            { renderColorDiv() }

        </div>
    );
};

export default ChangeColor;