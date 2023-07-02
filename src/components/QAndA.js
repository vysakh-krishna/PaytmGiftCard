import React from 'react';
const outer={
  margin: 0,
  display:'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '100%',
}
function QAndA() {
  return(
      <div style={outer}>
        <div style={{maxWidth:'400px',margin:'auto'}}>
        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',padding:'5px'}}>
          <div style={{flexDirection: 'row',justifyContent: 'center',display: 'flex'}}>  
              <div style={{marginRight:'10px',alignItems: 'end',justifyContent: 'end',display: 'flex'}}><img style={{height: 40, width: 40}} src="https://freepngimg.com/download/whatsapp/77099-whats-icons-text-symbol-computer-messaging-whatsapp.png" alt="whatsapp"/></div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
              <div style={{display:'flex', fontSize: '15px',textAlign: 'left',marginBottom:'5px',fontWeight: 1000}}>
                Where will I get the Gift Card ?
              </div>
              <div style={{textAlign: 'left'}}>
              You will receive it on Whatsapp/SMS on your mobile.
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',padding:'5px'}}>
          <div style={{flexDirection: 'row',justifyContent: 'center',display: 'flex'}}>  
              <div style={{marginRight:'10px',alignItems: 'end',justifyContent: 'end',display: 'flex'}}>
                <img style={{height: 40, width: 40}} src="http://cdn.onlinewebfonts.com/svg/img_92274.png" alt="whatsapp"/>
              </div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
              <div style={{display:'flex', fontSize: '15px',textAlign: 'left',marginBottom:'5px',fontWeight: 1000}}>
                When will I receive the Gift Card ?
              </div>
              <div style={{textAlign: 'left'}}>
                Within 48 hours ,when your Man Matters order is delivered.
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'center',padding:'5px'}}>
          <div style={{flexDirection: 'row',justifyContent: 'center',display: 'flex'}}>  
              <div style={{marginRight:'10px',alignItems: 'end',justifyContent: 'end',display: 'flex'}}><img style={{height: 40, width: 40}} src="https://icon-library.com/images/cross-png-icon/cross-png-icon-19.jpg" alt="whatsapp"/></div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
              <div style={{display:'flex', fontSize: '15px',textAlign: 'left',marginBottom:'5px',fontWeight: 1000}}>
                What if I cancel the order ?
              </div>
              <div style={{textAlign: 'left'}}>
                The voucher will not be delivered if you cancel the order.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default QAndA;
