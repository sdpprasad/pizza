import './cards.css'
import broken1 from './broken1.png'
import set from './set.png'
import battery from './battery.png'
import mic from './mic.png'
import audio from './audio.png'
import water from './water.png'
function Cards (){
    return(
        <div className="container-fluid" style={{backgroundColor:"lightcyan",marginTop:"5rem",borderRadius:"10px"}}>
            
                
            <div id='SERVICES'>
                <h5 style={{fontSize:"26px"}} ><b>Our Services</b> </h5>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <img src={broken1} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginLeft:"15px"}}>Display <br/>Repair</p>
                </div>
                <div className='col-md-2'>
                    <img src={set} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginRight:""}}>Software TroubleShooting</p>
                </div>
                <div className='col-md-2'>
                    <img src={battery} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginRight:""}}>Battery <br/>Replacement</p>
                </div>
                <div className='col-md-2'>
                <img src={mic} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>MicroPhone<br/> Repair</p>
                </div>
                <div className='col-md-2'>
                <img src={audio} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>Speaker<br/> Repair</p>
                </div>
                <div className='col-md-2'>
                <img src={water} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>Water Damage<br/> Repair</p>
                </div>

            </div>   
        
        </div>     


    )
}
export default Cards