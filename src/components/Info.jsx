import React from 'react';
import fileimg from '../icons/files.png';
import codeimg from '../icons/code.png';
import server from '../icons/server.png';
export default function Info(){
  return(
  <div>     
   <div className='main'>
    <br></br>
      <div style={{marginTop:'3vh'}}>       
            <div className='info-div2'>
            <div className='describe' >Share valuable resources like notes, assignments, question papers, 
            solutions in the community. Dive into the world of collaborative development. <p>The CodeConnect Way!</p> </div>
      </div>    
      <div className='side2'><img src={fileimg} alt='sideimg'></img> </div>     
    </div>
    <br></br>
  </div> 

  <div className='main'>
    <br></br>
      <div style={{marginTop:'3vh'}}>       
            <div className='info-div'>
            <div className='describe'>Unlock the mystery of your doubts with the doubt solving features. Post doubts, solve them, like or filter.
              <p>Everything at one place, made easy!</p>  </div>
      </div>    
      <div className='side'><img src={codeimg} alt='sideimg'></img> </div>     
    </div>
    <br></br>
  </div>   
  
  <div className='main'>
    <br></br>
      <div style={{marginTop:'3vh'}}>       
            <div className='info-div2'>
            <div className='describe'>Witness your code come alive on the digital stage with the live server.<p>Code, Connect, Create!</p></div>
      </div>    
      <div className='side2'><img src={server} alt='sideimg'></img> </div>     
    </div>
    <br></br> 
  </div>    
  
  </div>
    
    )
}
