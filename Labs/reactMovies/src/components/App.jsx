// 1. Import React 
import React from 'react';

// 2. Additional Imports 

import OMDBQueryForm from './OMDBQueryForm';
// 3. create component 
class App extends React.Component {
    render() {
        return(
            <>
            <OMDBQueryForm />
            </>
        )
    }
};
// 4. export component 
export default App;