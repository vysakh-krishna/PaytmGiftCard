import React from 'react';
import Giftcard from './Giftcard'
import Getnumber from './Getnumber'
function Home() {
    return (
        <div style={{backgroundColor:'black',width:'100%',margin:'auto'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{color:'white',margin:'auto',marginTop:''}}>
                    <h1>man matters</h1>
                    <div>
                        <span style={{color:'orange',}}><strong>Congrations</strong></span>
                    </div>
                </div>
            </div>
            <Giftcard/>
        </div> 
    )
}

export default Home
