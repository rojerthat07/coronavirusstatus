import React, { Component } from 'react'

class TopCountries extends Component {
    render() {
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
  
        return (

            <div className="top-country__country">

                <div className="top-country__name"><img src={this.props.country[2]} alt=""/> {this.props.country[0]}  </div>
                
                <div className="top-country__information">
                    <div className="top-country__item">Cases: <span className="top-country__data results__data--bad">{formatNumber(this.props.country[1])}</span> </div>
                    <div className="top-country__item">Deaths: <span className="top-country__data results__data--bad">{formatNumber(this.props.country[3])}</span> </div>
                    <div className="top-country__item">Active: <span className="top-country__data ">{formatNumber(this.props.country[4])}</span> </div>
                    <div className="top-country__item">Recovered: <span className="top-country__data results__data--good">  {(this.props.country[5] === 0 ? "N/A" : formatNumber(this.props.country[5]))}</span> </div>
                </div>

            </div>
           
            
       
        )
    }
}

export default TopCountries
