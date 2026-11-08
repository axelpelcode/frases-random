import React from 'react';

function FraseDisplay({fraseSelect, style}){
    return (
        <div >
            <p id="text" className="text-center" style={style} >"{fraseSelect[0]}"</p>
            <p id="author" className="text-rigth" style={style} >- {fraseSelect[1]}</p>
        </div>
    );
}

export default FraseDisplay;