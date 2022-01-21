import React from 'react'

const gft={
    backgroundColor:'rgb(230, 242, 255)',
    borderRadius:'10px',
    margin:'auto',
    width:'80%',
    position:'relative',
    zIndex:1,
    padding:'10px',
    bottom:-60
}
function Giftcard() {
    return (
        <div style={gft}>
            <div style={{padding:10}}>
                <strong>
                <span style={{color:'blue',}}>pay</span><span style={{color:'skyblue'}}>tm</span>
                </strong>
            </div>
            <div style={{display:'flex',flexDirection:'row', color:'pink',fontSize:'20px',textAlign:'center',padding:'15px',margin:'auto'}}>
                <div style={{margin:'auto'}}>
                    <span style={{color:'#ff3399',fontSize:'25px'}} >
                        Gift
                    </span>
                    <span style={{textAlign:'right',fontSize:'18px',color:'#ff9999'}}>  Card   </span>
                    <div style={{color:'brown',fontSize:'30px',display:'inline-block'}}>200
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Giftcard
