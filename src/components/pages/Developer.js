import React from 'react'

function Developer() {
    return (
        <div className="developer">
            <div className="developer__heading">Hello! I am Jer Carlo a Web Developer</div>
            <br></br>
            <div className="developer__paragraph">This site aims to give information and updates regarding with the Novel Coronavirus.  This app is made with React JS and fetching data using NovelCovid API. </div>
            <br></br>
        
    
            <div  className="developer__paragraph">If you are interested in helping with my career you can support me with donations by <a className="patreon" rel="noopener noreferrer" target="_blank" href="https://www.patreon.com/bePatron?u=33603144" data-patreon-widget-type="become-patron-button">Becoming my Patron!</a> or any help will gladly appreciated. I also wanted to say that I am available for any work for the position of Front-End Web Developer. You can email me at <span style={{color:"cyan"}}>jercarlocatallo@gmail.com</span> . Thank you!</div>
            
            <div className="developer__quotes">Keep Safe everyone!</div>

            
            <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
        </div>
    )
}


export default Developer