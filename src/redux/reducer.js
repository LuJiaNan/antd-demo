const InitialState = {
    options:[]
}

const reducer = (state = InitialState, action) => {
    switch(action.type){
        case "ADD":
            let options = state.options;
            console.log(options)
            let arr = [];
            let len = options.length;
            for (let i = len; i < len + action.payload; i++) {
                arr.push({
                    label: i,
                    value: i
                })
            }
            return {
                ...state,
                options: options.concat(arr)
            }
        case "DELETE":
            return state 
        case "CLEAR":
            return {
                ...state,
                options: []
            }
        default:
            return state
    }
}

export default reducer;