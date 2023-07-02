import React from 'react';
import { useState } from 'react';

const input={
    height:40,
    width:230,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    textAlign:'center',
    borderRadius:30,
    border:'none',
    backgroundColor:'#e4e2e2'
}
const btn={
    height:40,
    width:250,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    color: 'white',
    backgroundColor:'grey',
    border: 'none',
    borderRadius:30,
    disabled:'true',
    
}
const activeButton={
    height:40,
    width:250,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    color: 'white',
    backgroundColor:'#4da6ff',
    disabled:'false',
    border: 'none',
    borderRadius:30,
    cursor:'pointer'
}
var num;
function Getnumber(props) {
    const[number, setNumber]=useState("")
    return (
        <div>
            <div>
                You have WON paytmGift Card of Rs 200 for <strong>placing the order on Man Matters</strong> 
            </div>
            <div>
                <input type="text" placeholder="Enter your phone number" style={input} onChange={(e)=>setNumber(e.target.value)}/>  
            </div>
            <div>
                <button style={validate(number)===true?activeButton:btn} onClick={()=>validate(num)===true?props.setItem(number):undefined}>
                    Wow! Get my Paytm Gift Card {">"}
                    
                </button>
            </div>
        </div>
    )
}
function validate(number){
    num=number;
    if(isNaN(num)){
        return false;
    }
    if(num.length !== 10){
        return false;
    }
    localStorage.setItem("numb",num);
    
    return true;
}

export default Getnumber
