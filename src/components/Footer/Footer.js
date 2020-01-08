import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="foot">
                    All rights reserved {this.props.companyName}
                </footer>
                <button 
                    onClick={this.props.counterFunc}>Footer Button
                </button>
            </div>
        );
    }

}


export default Footer;