import React from 'react'
import stop from '../images/stop.gif'

function Prevention() {
    return (
        <div style={{margin:"3em 0"}}>
            
             <div className="section-heading">Prevention and Fight Coronavirus</div>
                
                <div className="who">
                <img src={stop} alt=""/>
                <div className="who__heading">STAY HOME.SAVE LIVES.</div>
                    <div className="who__paragraph">STAY home as much as you can</div>
                    <div className="who__paragraph">KEEP a safe distance</div>
                    <div className="who__paragraph">WASH hands often</div>
                    <div className="who__paragraph">COVER your cough</div>
                    <div className="who__paragraph">SICK? Call ahead</div>
       
                </div>
    
                   <div className="section">
                       <div className="section__information">

                           <div className="section__heading results__data--good">Do's</div>
                           <div className="section__paragraph">1. Do Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub.</div>
                           <div className="section__paragraph">2. Do Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze.</div>
                           <div className="section__paragraph">3. Do practice “social distancing”: Stay 3- to 6-feet away from other people, especially if they're coughing or sneezing.</div>
                           <div className="section__paragraph">4. Do Stay home and self-isolate from others in the household if you feel unwell.</div>
                           <div className="section__paragraph">5. Do wear a mask properly around others if you suspect you may have the virus.</div>
                        

                           <div className="section__heading results__data--bad">Don't</div>
                           <div className="section__paragraph">1. Don't Touch your eyes, nose, or mouth if your hands are not clean
                            </div>
                            <div className="section__paragraph">2. Don't wear a mask unless you’re sick.
                            </div>
                            <div className="section__paragraph">3. Don't go near seniors or those at higher risk for severe illness.
                            </div>
                            <div className="section__paragraph">4. Don't go to the doctor unless it’s urgent.
                            </div>
                            
                       </div>
                   
                   </div>
             
         

        </div>
    )
}


export default Prevention