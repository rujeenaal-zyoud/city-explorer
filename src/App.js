// import './App.css';
import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Component/Weather';
import Movies from './Component/Movies'
//import dotenv from 'dotenv';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //this display for map if no data in form will not appear
      displayMap: false,
      //now create array that we want up date using state
      search: '',
      locData: '',
      weatherData: [],
      MoivesDataArr :[],
      errorMessage: false,
      // displayWeather: false,


    }
  }


  getLoction = async (e) => {
    e.preventDefault();

    let locUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.b6a5cec0e0fa9b2e067c90ea37e22aee&q=${this.state.search}&format=json`;
    //loResult will get request using axios

    try {

      let locResult = await axios.get(locUrl);
      //know we want last state that we have 
      this.setState({
        locData: locResult.data[0],
        displayMap: true,


      })
      console.log(this.state.locData);
    }
    catch {
      this.setState({
        displayMap: false,
        errorMessage: true,
      })
    }
    this.weatherDataCity();
    this.MoivesData();
  }
  weatherDataCity = async () => {
    let serverRoute = process.env.REACT_APP_SERVER;
    const url = `${serverRoute}/weather?city_name=${this.state.search}`;
    const weatherItem = await axios.get(url)
    this.setState({
      weatherData: weatherItem.data

    })
  }

  MoivesData = async () => {
    let serverRouteMoive = process.env.REACT_APP_SERVER;
    const urlM = `${serverRouteMoive}/movies?query=${this.state.search}`;
    const MoivesReq = await axios.get(urlM)
    this.setState({
      MoivesDataArr: MoivesReq.data

    })
  }

  updateSearch = (event) => {
    console.log(this.state.search);
    console.log(event.target);
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search);
  }


  render() {
    return (
      <>
        <h1>city Explorer</h1>

        { <Form onSubmit={this.getLoction}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>add a city</Form.Label>
            <Form.Control onChange={this.updateSearch} type="text" placeholder="add a city" custom />
            <Button variant="primary" type="submit" >
              Explore
            </Button>
          </Form.Group>
        </Form>}
        <p>{this.state.locData.display_name}</p>
        <p>{this.state.locData.lon}</p>
        <p>{this.state.locData.lat}</p>


        { this.state.displayMap &&
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.b6a5cec0e0fa9b2e067c90ea37e22aee&center=${this.state.locData.lat},${this.state.locData.lon}`} alt=''
          />
        }
        {this.state.errorMessage &&
          <p>error in receving the data</p>
        }

        {console.log(this.state.weatherData, 'in consoleloge-tocheck')}

        {this.state.weatherData.map((element, idx) => {
          return (
            <Weather key={idx} date={element.date}
              descrption={element.descrption}
            />
          )
        })}


        {this.state.MoivesDataArr.map((element, idx) => {
          return (
            <Movies key={idx}
              original_title={element.original_title}
              overview={element.overview}
              vote_average={element.vote_average}
              vote_count={element.vote_count}
              // poster_path={element.poster_path}
              popularity={element.popularity}
              release_date={element.release_date}
            />
          )
        })}
      </>
    )

  }
}

export default App;
// locData is a choisen city

