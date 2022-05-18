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
                             <a href={`/models/pokemon.js/${i}`}>{pokemon.name}</a>{' '} I Choose You!
                    
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}


module.exports = Index;