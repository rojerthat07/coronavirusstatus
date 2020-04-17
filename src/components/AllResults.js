import React, { Component } from 'react'

class AllResults extends Component {
  

    render() {
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
        return (
            <div className="results">
         <div className="results__item">Total Cases: <span className="results__data">{formatNumber(this.props.result.cases)}</span></div>
         <div className="results__item ">Total Deaths: <span className="results__data results__data--bad">{formatNumber(this.props.result.deaths)}</span></div>
            <div className="results__item">Total Active: <span className="results__data">{formatNumber(this.props.result.active)}</span></div>
            <div className="results__item ">Total Recovered: <span className="results__data results__data--good">{formatNumber(this.props.result.recovered)}</span></div>
        
        </div>
        )
    }
}

export default AllResults
