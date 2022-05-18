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
                                This pokemon is <a href={`/models/pokemon.js/${i}`}>{pokemon.name}</a><br></br>
                                {pokemon.img} 
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}


module.exports = Index;