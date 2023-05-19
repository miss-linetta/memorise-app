import { CREATE, FETCH_POST, DELETE, FETCH_ALL, FETCH_BY_SEARCH, LIKE, UPDATE } from "../constants";

const reducer = (posts = [], action: any) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_SEARCH:
            return action.payload;
        case FETCH_POST:
            return action.payload;
        case CREATE:
            return [ ...posts, action.payload ];
        case UPDATE:
            return posts.map((el: any) => {
                return el._id === action.payload._id ? action.payload : el
            });
        case DELETE:
            return posts.filter((el: any) => el._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;