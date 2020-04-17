import React, { Component } from 'react'
//Dependencies and Styles
import './main.scss'
import $ from 'jquery'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//Components
import Header from './components/Header'
import AllResults from './components/AllResults'
import Countries from './components/Countries'
import TopCountries from './components/TopCountries'
import Developer from './components/pages/Developer'
import AboutCorona from './components/pages/AboutCorona'
import Prevention from './components/pages/Prevention'


class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      searchTerm:'Philippines',
      statistics:1
     
    }

    this.fetchAll()
    this.performSearch()
    this.topCountrySearch()
  
  }
  

//Fetching all the corovirus count globally
  fetchAll(){
    const urlString = 'https://corona.lmao.ninja/v2/all';
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
    
        const results = [searchResults];
        var covidResults =[]
        results.forEach( result =>{
          const covidResult = <AllResults key={result.updated} result={result} />
          covidResults.push(covidResult)
        })

        this.setState({
          allCovid:covidResults
        })
      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data")
      }
    })
  }
  searchChangeHandler = (e) =>{
    const searchTerm = e.target.value
    this.setState({
      searchTerm: searchTerm
    })

  }
  submitHandler = (event) =>{
    event.preventDefault()

      if(isNaN(this.state.searchTerm)){
        $(".country").fadeOut();
        this.performSearch()
        this.countryInfo()
        document.getElementById("search-bar__input").value = "";
        $(".country").fadeIn();
        document.getElementById("search-bar__input").placeholder = "Enter Country Name or Country ISO";

      }else{
        document.getElementById("search-bar__input").value = "";
        document.getElementById("search-bar__input").placeholder = "Please Enter Valid Country";

      }

 
  }

//Seacrhing for Country
  performSearch(searchTerm = this.state.searchTerm){
    const urlString = 'https://corona.lmao.ninja/v2/countries/' + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
     
        const results = [searchResults]
        var countryRows = []
        results.forEach( country =>{
      
          const countriesItem = <Countries key={country.country} country={country} />
          countryRows.push(countriesItem)

        })

        this.setState({
         countries:countryRows
        })
        
      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data")
      }
    })
  }

  //Country information
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
 countryInfo(searchTerm = this.state.searchTerm){
    const urlString = 'https://restcountries.eu/rest/v2/all' 
    $.ajax({
      url: urlString,
      success: (searchResults) =>{
        const results = searchResults
        results.forEach( country =>{
        
        if(country.name.toLowerCase() === searchTerm.toLowerCase() || country.alpha2Code.toLowerCase()  === searchTerm.toLowerCase() || country.alpha3Code.toLowerCase()  === searchTerm.toLowerCase()){
          document.getElementById("country-population").innerHTML = this.formatNumber(country.population);
          document.getElementById("country-capital").innerHTML = country.capital;
          document.getElementById("country-region").innerHTML = country.region;
          document.getElementById("country-timezones").innerHTML = country.timezones[0];
          document.getElementById("country-currencies").innerHTML = country.currencies[0].name;
          document.getElementById("country-demonym").innerHTML = country.demonym;

        }
        })

      },
      error: (xhr,status,err) =>{
        console.error("Failed to fetch data")
      }
    })
  }


//Top Countries with Covid-19
topCountrySearch(){
  const urlString = 'https://corona.lmao.ninja/v2/countries';
  $.ajax({
    url: urlString,
    success: (searchResults) =>{
      const results = searchResults
      var cases = []
      var TopCountryRows = []
      var j = this.state.statistics


      results.forEach(country =>{
        cases.push([country.country,country.cases,country.countryInfo.flag,country.deaths,country.active,country.recovered])
      })

      cases.sort(function(a, b) {
        return b[j] - a[j];
    });

      for(let i = 0 ;i<10;i++){
         const countriesItem = <TopCountries key={cases[i][0]} country={cases[i]} />
        TopCountryRows.push(countriesItem)
      }

      
      this.setState({
       TopCountries:TopCountryRows,
      })

    },
    error: (xhr,status,err) =>{
      console.error("Failed to fetch data")
    }
  })
}


//Butons Choices Handler
recovered = (e) =>{
  e.preventDefault();
  $(".top-country__country").fadeOut();
  this.topCountrySearch()
this.setState({
 statistics:5
})
$(".top-country__country").fadeIn();
}

cases = (e) =>{
  e.preventDefault();
  $(".top-country__country").fadeOut();
  this.topCountrySearch()
this.setState({
 statistics:1
})
$(".top-country__country").fadeIn();
}
death = (e) =>{
  e.preventDefault();
  $(".top-country__country").fadeOut();
  this.topCountrySearch()
this.setState({
 statistics:3
})
$(".top-country__country").fadeIn();
}
active = (e) =>{
  e.preventDefault();
  $(".top-country__country").fadeOut();
  this.topCountrySearch()
this.setState({
 statistics:4
})
$(".top-country__country").fadeIn();
}

  render(){
    return (
      <Router>
      <div className="App">
        <Header />
        <Route path="/coronavirusstatus" exact >
  
      <div className="main">
       {this.state.allCovid}
       <form className="search-bar" onSubmit={this.submitHandler}>
        <input id="search-bar__input" onChange={this.searchChangeHandler} className="search-bar__input" placeholder="Enter Country Name or Country ISO" type="text"/>
        <input  type="submit" className="search-bar__button" value="Search "/>
        </form>
          <div className="country__info">
          {this.state.countries}
          <div className="country">
          <div className="country__information">
          <div className="country__item">Population:  <span id="country-population" className="country__data">Enter Country</span> </div>
          <div className="country__item">Capital:   <span id="country-capital" className="country__data">Enter Country</span> </div>
          <div className="country__item">Region: <span id="country-region" className="country__data">Enter Country</span> </div>
          <div className="country__item">Timezone:   <span id="country-timezones" className="country__data">Enter Country</span> </div>
          <div className="country__item">Currency: <span id="country-currencies" className="country__data">Enter Country</span> </div>
          <div className="country__item">Demonym:   <span id="country-demonym" className="country__data">Enter Country</span> </div>
          </div>
          </div>
      </div>
      
       <button className="collapse__button" data-toggle="collapse" data-target="#cases">Top Countries by Statistics</button>
       <div id="cases" className="top-country collapse show">
       {this.state.TopCountries}
       </div>
       <div className="statistics-choice">
        <button onClick={this.cases}>Top Cases</button>
        <button onClick={this.death}>Top Deaths</button>
        <button onClick={this.active} >Top Active</button>
        <button onClick={this.recovered}>Top Recovered</button>
        </div>
  
       </div>
       </Route>
       <div className="main">
       <Route path="/coronavirusstatus/developer" component={Developer} />
      <Route path="/coronavirusstatus/aboutcorona" component={AboutCorona} />
      <Route path="/coronavirusstatus/prevention" component={Prevention} />
      </div>
     
      </div>
      </Router>
    );
  }
 
}

export default App;
