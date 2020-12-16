import React from 'react'
import { connect } from 'react-redux';
import { prevPage, nextPage} from '../redux/actions';
import { Redirect, Route } from 'react-router-dom'


class Screening extends React.Component {

    state = {
        answer_id: ""
    }

    handleChange = (e) => {
        this.setState({
            answer_id: e.target.value
        })
    }

    prevPageClick = (e) => {
        e.preventDefault()
        if(this.props.page > 1){
            this.props.prevPage()
        }
    }

    nextPageClick = (e) => {
        e.preventDefault()
        if(this.props.page < this.props.questions.length)
        this.props.nextPage()
    }
    
    // currentQuestion = () => {
    //     return this.props.questions[this.props.page]
    // }

    renderAnswers = (q) => {
        return q.answers.map( a => <p key={a.id}>
        <input name={q.id} id={a.id} type="radio" value={a.id}/>
        <label htmlFor={a.id} >{a.text}</label>
        </p>)
    }

    render(){
        const divStyling = {
            // backgroundColor: "#fff0de",
            backgroundColor: '#f0f0f0',
            height: "90vh",
            width: "90vw",
            margin: "2.5vh 5vw",
            borderRadius: "25px",
            color: "#ffffff"
        }
        
        return(
            <>
            <Redirect to={`/screening_tool/${this.props.page}`}/>

            <Route 
                path="/screening_tool/:id"
                render={ (routerProps) => {
                    let index = parseInt(routerProps.match.params.id)
                    let question;
                    question = this.props.questions[index + 1]
                    if (question){
                        return (

                        <div style={divStyling}>
                            <form
                                className="form-container"
                            >
                                <h2>{question.category}</h2>
                            <fieldset 
                                limit="1"
                                onChange={this.handleChange}>
                                <legend>{question.text}</legend>
                                {this.renderAnswers(question)}
                            </fieldset>
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
                } }
            />
            </>
        )
    }
}

const msp = state => {
    return {
        page: state.page,
        questions: state.questions,
        user: state.user
    }
}

const mdp = dispatch => {
    return {
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())
    }
}
export default connect(msp, mdp)(Screening)