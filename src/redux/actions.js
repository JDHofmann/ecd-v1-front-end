const url = "http://localhost:3000/questions"

export const fetchQuestions = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({
            type: 'LOAD_QUESTIONS',
            questions: data
        }))
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accepts":"application/json"
            },
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'SET USER',
            user: data.id
        }))
    }
}


export const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    }
}

export const prevPage = () => {
    return {
        type: 'PREV_PAGE'
    }
}