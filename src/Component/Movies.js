import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {
    render() {

        return (
            <>
                <p> {this.props.original_title}  </p>
                <p>{this.props.overview}</p>
                <p> {this.props.vote_average}  </p>
                <p>{this.props.vote_count}</p>
                {/* <img src={this.props.poster_path} alt=''/> */}
                <p>{this.props.popularity}</p>
                <p>{this.props.release_date}</p>
            </>

        )
    }
}

export default Movies;