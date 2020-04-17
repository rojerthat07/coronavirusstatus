import React from 'react'
import image1 from '../images/photo-1583324113626-70df0f4deaab.jpg'

function AboutCorona() {
    return (
        <div style={{margin:"3em 0"}}>
            <div className="section-heading">About COVID-19</div>

            <div className="section">
            <div className="section__information">
            <div className="section__paragraph">COVID-19 is the disease caused by the new coronavirus that emerged in China in December 2019.</div>
            </div>
            </div>
            <br></br>
            <div className="section">
            <div className="section__information">
            <div className="section__paragraph">COVID-19 symptoms include cough, fever, shortness of breath, muscle aches, sore throat, unexplained loss of taste or smell, diarrhea and headache. COVID-19 can be severe, and some cases have caused death</div>
            </div>
            <br></br>
            </div>
            <div className="section">
            <div className="section__information">
            <div className="section__paragraph">The new coronavirus can be spread from person to person. It is diagnosed with a laboratory test.</div>
            </div>
            </div>
            <br></br>
        
        <div className="section">
            <div className="section__information">
            <div className="section__paragraph">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</div>
            </div>
            </div>

            <div className="two-column">

            <div className="column">
            <div className="section">
            <div className="section__image">
                <img src={image1} alt=""/>
            </div>
            </div>
            </div>
          
          <div className="column">
          <div className="section">
            <div className="section__information">
            <div className="section__paragraph">The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). </div>
            </div>
            </div>
         
            </div>

          </div>
         
            <div className="section">
            <div className="section__information">
            <div className="section__paragraph">At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</div>
            </div>
            </div>
          
        </div>
       
    )
}

export default AboutCorona
