import pl from "../translations/pl.json"


const languageReducer = (state = pl, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export default languageReducer