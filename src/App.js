import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// function App() {
//     return(
//         <div>
//             <Header/>
//             <Main/>
//             <Footer/>
//         </div>
//     );
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            companyName:"Arshhh",
            count:1
        }
    }
    counterFunc=()=>{
        this.setState(prevState=>{
            return {
                count:prevState.count+1
            }
        });
    }
    render() {
        return(
            <div>
                <Header count={this.state.count} />
                {this.state.count}
                {<button onClick={this.counterFunc}>Click me</button>}
                <Main/>
                <Footer counterFunc={this.counterFunc} companyName={this.state.companyName}/>
            </div>
        );
    }
}

export default App;