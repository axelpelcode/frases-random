import React from 'react';

function FraseDisplay({fraseSelect}){
    return (
        <div>
            <p id="text" className="text-center" >"{fraseSelect[0]}"</p>
            <p id="author" className="text-rigth" >- {fraseSelect[1]}</p>
        </div>
    );
}

export default FraseDisplay;