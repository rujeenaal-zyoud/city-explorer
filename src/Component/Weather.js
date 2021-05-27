import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import dotenv from 'dotenv';
// import axios from 'axios';

class Weather extends React.Component {
    render() {
        return (  
                    <>
                    <h5>Forecast details for each date :</h5>
                    
                        <p>{this.props.descrption}</p>
                    
                        <p>{this.props.date}</p>

                    </>
        
        
        
                        //})
        )
    }
}
    


export default Weather;