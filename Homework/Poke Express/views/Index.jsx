const React = require('react'); 
const pokemon = require('../models/pokemon');
class Index extends React.Component {

    render() {
        const {pokemon} = this.props;
        return (
            <>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return(
                            <li>
                                This pokemon is {pokemon.name}<br></br>
                                <a href="">{pokemon.img} </a>
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}


module.exports = Index;