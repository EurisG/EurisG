const React = require('react')

class Show extends React.Component {
    render () {

        const fruit = this.props.fruit


        return (
            <>
            <h1> Show Page </h1>

            The {fruit.name} is {fruit.color}
            {" "}
            {fruit.readyToEat ? '. It is Ready to Eat!' : ". Its no Good!"}
            </>
        );
    }
}

module.exports = Show;

// inside react components :render and :return