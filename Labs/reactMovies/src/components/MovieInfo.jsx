// 1. Import React 
import React from 'react';

// 2. Make component 
class MovieInfo extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>Movie: {this.props.searchResult.Title}</h1>
                <h2>Year: {this.props.searchResult.Year}</h2>
                <img 
                    src={this.props.searchResult.Poster} 
                    alt={this.props.searchResult.Title}/>
                
                <h3>Genre: {this.props.searchResult.Genre}</h3>
                <h4>Plot: {this.props.searchResult.Plot}</h4>

            </div>
        );
    };
};

// export component
export default MovieInfo;