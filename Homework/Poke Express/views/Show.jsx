const React = require('react'); 
// const pokemon = require('../models/pokemon');
class Show extends React.Component {

    render() {
        const pokemon = this.props.pokemon;
        return (
            <>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>
                    {pokemon.name} <br></br> {pokemon.img}
                </h2>
                <a href='./Index.jsx'>Back</a>
            </>
            
        );
    }
}

module.exports = Show;