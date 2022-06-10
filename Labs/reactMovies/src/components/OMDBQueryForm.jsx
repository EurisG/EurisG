import React from 'react';

import MovieInfo from './MovieInfo';


class OMDBQueryForm extends React.Component {
            
              // add a state to our component 
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apikey: 'apikey=' + '236e1aa7',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }

    // methods 
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };
     handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            searchURL: this.state.baseURL + 
            this.state.apikey +
            this.state.query + 
            this.state.movieTitle,
        },
            () => {
                fetch(this.state.searchURL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setState({
                        searchResult: data,
                    });
                })
                .catch((error) => {
                    console.error(error.message);
                })
                .finally(() => {
                    this.setState({
                        movieTitle: "",
                    });
                });
            }
        );
     };

    render() {
        return(
            <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='movieTitle'>Search:</label>
         <br /><br />
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          {' '}
          <input
            type='submit'
            value='Find Movie Info'
            disabled={!this.state.movieTitle ? true: false}
          />
        </form>
        {this.state.searchResult ? 
       (<MovieInfo searchResult={this.state.searchResult} />) : ("")}
        {/* <OMDBQueryForm /> */}
      </>
        );
    }
      
   
};

export default OMDBQueryForm;