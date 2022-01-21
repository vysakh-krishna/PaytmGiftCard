import React from 'react';
import Getnumber from './Getnumber';
import QAndA from './QAndA';

const outerstyle={
    marginTop:60,
    padding:10,
}
function Main(props) {
    if(localStorage.getItem("numb")===null){
        return(
            <div style={outerstyle}>
                 <Getnumber  setItem={props.setItem}/>
            </div>
        )
        
    }
    else{    
        return (
            <div style={outerstyle}>
                <QAndA/>
            </div>
        )
    }
}

export default Main
