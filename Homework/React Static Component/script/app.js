// styling 
const body = {
 border: "solid 2px red",
 margin: "20px",
 height:"700px",
 backgroundColor: "grey"
}

const bodyOne = {
    padding: "30px"
}

const boxOne = {
    border: "solid 2px black",
    padding: "40px",
    width: "70px",
    height: "550px",
    backgroundColor: "lightGrey",
    textAlign: "center"
}

const boxTwo = {
    border : "solid 2px black",
    padding: "40px",
    width: "50px",
    height: "250%",
    backgroundColor: "lightGrey",
   
    // display: "flex",
    justifyContent: "spaceAround"
}

const boxDivTwo = {
   
    padding: "40px",
    width: "50px",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    // position: "relative",
    // top: "0"
}

const boxThree = {
    border : "solid 2px black",
    padding: "40px",
    width: "550px",
    height: "250px",
    backgroundColor: "lightGrey"
}

const boxInner = {
    border : "solid 2px black",
    padding: "40px",
    width: "450px",
    height: "100px",
    backgroundColor: "grey"
}

class LeftBox extends React.Component {
    render() {
        return(
          <div style={body}>
              <div style={bodyOne}>
                <div style={boxOne}>
                <h4>Dashboard</h4>
                <h4>Widget</h4>
                <h4>Reviews</h4>
                <h4>Customers</h4>
                <h4>Online Analyst</h4>
                <h4>Settings</h4>
                </div>
                </div>
           </div>
        );
    }
};

class TopBox extends React.Component {
    render() {
        return(
            
            <div style={boxDivTwo}>
            <div style={boxTwo}>
                <p>Reviews</p>
                <h3>1,281</h3>
            </div>

            <div style={boxTwo}>
                <p>Average Rating</p>
                <h3>4.6</h3>
            </div>

            <div style={boxTwo}>
                <p>Sentiment Analyst</p>
                <h3>960</h3>
                <h3>122</h3>
                <h3>321</h3>
            </div>

        </div>
       
        );
    }
};

class BottomBox extends React.Component {
    render() {
        return(
            <div style={boxThree}>
                <p>Website Visitors</p>
                <h3>821</h3>
                <div style={boxInner}>

                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
             <div>
                 <LeftBox />
                    <TopBox />
                    
                 <BottomBox />
            </div>
               
             
           
            </div>
        );
    }
};





ReactDOM.render(<App />, document.querySelector('.container'));