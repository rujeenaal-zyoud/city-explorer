import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
//import dotenv from 'dotenv';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props){
super(props)
this.state={
    dataCity:'',
    //dataWeather:this.props.
}
    }
    weatherDataCity=async()=>{
        let serverRoute = process.env.REACT_APP_SERVER;
        const url = `${serverRoute}/weather?city_name=${this.props.search}&lat=${this.props.lat}&lon=${this.props.lon}`;
        const weatherItem = await axios.get(url)
        this.setState({
            dataCity:weatherItem.data
    
          })

    }
    render() {
        return (
           
              
                    <>
                    <h5>Forecast details for each date :</h5>
                        <ListGroup>
                            <ListGroup.Item ><p>{this.state.dataCity.description}</p></ListGroup.Item>
                            {/* <ListGroup.Item > <p>{element.}</p></ListGroup.Item> */}

                        </ListGroup>
                    </>
        
        )
    }
}

export default Weather;