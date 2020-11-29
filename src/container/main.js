import React from 'react'
import { NavLink } from 'react-router-dom'

class Main extends React.Component {

    clickHandler = () => {
        this.props.beginClickHandler()
    }
    
    render(){
        const divStyling = {
            backgroundColor: "#ff5f61",
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
        const btnStyling = {

        }
        return(
            <div style={divStyling}>
                <h2>Main</h2>
                <p 
                    style={pStyling} 
                    // className="red"
                >Welcome to ecd evaluation of some terrible things that happened to you in the recent past. Do you mind answering some questions?</p>
                {/* <button 
                    onClick={this.clickHandler}
                    >BEGIN</button> */}
                <NavLink 
                    className="begin-btn"
                    to="screening_tool"
                >Begin</NavLink>

            </div>
        )
    }
}
export default Main