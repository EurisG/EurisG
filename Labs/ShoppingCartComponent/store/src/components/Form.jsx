import React from 'react'


const Form = (props) => {

    return(
       <div>
                    {/* <button onClick={props.handleFormSubmit}>Toggle Hiring</button> */}
            <form
             onSubmit={
                 props.handleFormSubmit
             }
             >
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name= "name"
              type="text"
              value={props.name}
              onChange={props.handleChange}
            />
             <br />
            <br />
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              name= "price"
              type="text"
              value={props.price}
            //   onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              name= "description"
              type="text"
              value={props.description}
            //   onChange={this.handleChange}
            />
            <br />
            <br />
            <input type="submit" />
            </form>
            <div className="preview">
            <h2>Preview our new item</h2>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <h5>{props.description}</h5>
          </div>
       </div>
    )
}

export default Form;