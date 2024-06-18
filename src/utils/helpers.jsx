export const initialState = {
    step:1
}
export const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'Next':
            return {...state, step: state.step + 1}
        case 'Prev':
            return {...state, step: state.step - 1}
        case 'Reset':
            return initialState
        default:
            return state
    }
}