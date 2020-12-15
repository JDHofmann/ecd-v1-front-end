import React from 'react'
import { connect } from 'react-redux';
import { prevPage, nextPage} from '../redux/actions';
// import { data } from '../data.js'


class Screening extends React.Component {


    prevPageClick = (e) => {
        e.preventDefault()
        this.props.prevPage()
    }

    nextPageClick = (e) => {
        e.preventDefault()
        this.props.nextPage()
    }
    
    currentQuestion = () => {
        return this.props.questions[this.props.page]
    }

    renderQuestion = () => {
        return <>
            <h2>{this.currentQuestion().category}</h2>
            <h3></h3>
            <fieldset>
                <legend>{this.currentQuestion().text}</legend>
            </fieldset>
        </>
    }

    render(){
        const divStyling = {
            backgroundColor: "#fff0de",
            backgroundColor: '#f0f0f0',
            height: "90vh",
            width: "90vw",
            margin: "2.5vh 5vw",
            borderRadius: "25px",
            color: "#ffffff"
        }

        return(
            <div style={divStyling}>
                <form
                    className="form-container"
                >
                    {this.renderQuestion()}
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
        page: state.page,
        questions: state.questions
    }
}

const mdp = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}
export default connect(msp, mdp)(Screening)