export default function user(state = {name: "Aliasghar"}, action) {


    switch (action.type) {
        case "USER":
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}