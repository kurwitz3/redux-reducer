export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':

            return { ...state, friends : [...state.friends, action.friend] }
                
                
            
            case 'REMOVE_FRIEND':

                return {
                    ...state,
                    friends: state.friends.filter(item => action.id !== item.id)
                }
            default: 
            return state
    }
}
