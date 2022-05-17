const React = require('react')

class New extends React.Component{

    render() {

        return(
            <>
            <form action="/fruits" method="POST">
                 Name: <input type="text" name="name" placeholder='POST'/><br/>
                 Color: <input type="text" name="color" placeholder='Add' /><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                 <input type="submit" name="" value="Create Fruit"/>
               </form>
    
             </>
        )
    }

}

module.exports = New