import React, { Component } from 'react'

class Countries extends Component {

    render() {
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
  
        return (
            <div className="country">
            
                <div className="country__flag"></div>
                <div className="country__name"><img src={this.props.country.countryInfo.flag} alt=""/> {this.props.country.country}  </div>
                <div className="country__status">
                    <div className="country__item">Cases: <span className="country__data results__data--bad">{formatNumber(this.props.country.cases)}</span> </div>
                    <div className="country__item">Deaths: <span className="country__data results__data--bad">{formatNumber(this.props.country.deaths)}</span> </div>
                    <div className="country__item">Active: <span className="country__data">{formatNumber(this.props.country.active)}</span></div>
                    <div className="country__item">Recovered: <span className="country__data results__data--good">{ (this.props.country.recovered) === 0 ? "N/A" : formatNumber(this.props.country.recovered)}</span></div>
                   
                </div>
                
            </div>
        )
    }
}

export default Countries
