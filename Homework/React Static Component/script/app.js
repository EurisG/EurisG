// styling 
const body = {
//  padding: "100px",
 margin: "200px",
 backgroundColor: "#b4b4b4",
 height: "1100px",
 fontFamily: "'Nunito', sans-serif"
}

const bodyOne = {
    padding: "30px",
    // display: "flex",
    // justifyContent: "flexEnd"
}

const bodyThree = {
    padding: "30px",
    
    
}

const boxOne = {
    // border: "solid 2px black",
    padding: "50px",
    width: "70px",
    height: "650px",
    backgroundColor: "lightGrey",
    textAlign: "center",
    
}
const boxOneText = {
    top: "20%",
    position: "relative"
}
const textTwo = {
    textAlign: "center"
}


const boxTwo = {
    // border : "solid 2px black",
    // padding: "40px",
    width: "170px",
    height: "250px",
    backgroundColor: "lightGrey",
    margin: "10px",
    position: "relative",
    top: 150,
}

const boxDivTwo = {
   
    padding: "40px",
    // width: "150px",
    height: "60px",
    alignitems: "center",
    display: "flex",
    justifyItems: "right",
    marginLeft: "150px"
   
}

const boxThree = {
    // border : "solid 2px black",
    padding: "40px",
    // width: "550px",
    height: "350px",
    backgroundColor: "lightGrey",
    margin: "10px",
    marginLeft: "27%",
    flexDirection: "flex",
    position: "relative",
    bottom: 550,
}

const boxInner = {
    // border : "solid 2px black",
    padding: "70px",
    // width: "450px",
    height: "100px",
    backgroundColor: "grey"
}

class LeftBox extends React.Component {
    render() {
        return(
          <div>
              <div style={bodyOne}>
                <div style={boxOne}>
                <h4 style={boxOneText}>Dashboard</h4>
                <h4 style={boxOneText}>Widget</h4>
                <h4 style={boxOneText}>Reviews</h4>
                <h4 style={boxOneText}>Customers</h4>
                <h4 style={boxOneText}>Online Analyst</h4>
                <h4 style={boxOneText}>Settings</h4>
                </div>
                </div>
           </div>
        );
    }
};

class TopBox extends React.Component {
    render() {
        return(
            
        <div style={bodyThree}>
            <div style={boxDivTwo}>
                <div style={boxTwo}>
                    <h5>Reviews</h5>
                    <h3>1,281</h3>
                 </div>

            <div style={boxTwo}>
                <h5>Average Rating</h5>
                <h3>4.6</h3>
            </div>

            <div style={boxTwo}>
                <h5>Sentiment Analyst</h5>
                <h3 style={textTwo}>960</h3>
                <h3 style={textTwo}>122</h3>
                <h3 style={textTwo}>321</h3>
            </div>

             </div>
       </div>
        );
    }
};

class BottomBox extends React.Component {
    render() {
        return(
            <div style={bodyOne}>
                <div style={boxThree}>
                    <h5>Website Visitors</h5>
                    <h3>821</h3>
                     <div style={boxInner}></div>
                 </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div style={body}>
                 <TopBox />
                 
                <LeftBox /> 
                <BottomBox />
                
                  
                 {/* <BottomBox /> */}
           
            </div>
        );
    }
};





ReactDOM.render(<App />, document.querySelector('.container'));