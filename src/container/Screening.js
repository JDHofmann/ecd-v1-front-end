import React from 'react'
import { connect } from 'react-redux';
import { prevPage, nextPage } from '../redux/actions';

class Screening extends React.Component {

    prevPageClick = (e) => {
        // console.log("prev page click in Screening")
        e.preventDefault()
        this.props.prevPage()
    }

    nextPageClick = (e) => {
        e.preventDefault()
        this.props.nextPage()
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
        return(
            <div style={divStyling}>
                <form
                    className="form-container"
                >
                    <label>Question __</label>
                    <input></input>
                    <button
                        onClick={this.prevPageClick} 
                        className="pag-btn prev"
                    >Prev</button>
                    <button 
                        onClick={this.nextPageClick}
                        className="pag-btn next"
                    >Next</button>

                </form>
            </div>
        )
    }
}

const msp = state => {
    return {
        page: state.page
    }
}

const mdp = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}
export default connect(msp, mdp)(Screening)