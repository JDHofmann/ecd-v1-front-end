import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

class Main extends React.Component {

    state = {
        redirect: false
    }

    begin = () => {
        this.props.fetchUsers()
        this.setState({
            redirect: true
        })
    }
    
    render(){
        const divStyling = {
            backgroundColor: "#fff0de",
            // backgroundColor: "#66cc99",
            height: "90vh",
            width: "90vw",
            margin: "2.5vh 5vw",
            borderRadius: "25px",
            color: "#ffffff"
        }
        const pStyling = {
            margin: "2.5vh 5vw",
            fontSize: "18px"
        }

        
        return(
            <>
            {
                this.state.redirect ?
                <Redirect to="screening_tool/1"/>
                :null
            }
            <div style={divStyling}>
                <h2>Welcome</h2>
                <p 
                    style={pStyling} 
                    // className="red"
                >Based on your clinical evaluation, please answer the following questions. A positive screen will generate a list of local referral resources.</p>
                <button
                    onClick={this.begin}
                    className="begin-btn">Begin</button>

            </div>
            </>
        )
    }
}
export default Main