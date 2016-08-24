
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_GET_LIST':
            return action.payload;
            break;
    }
    return state;
}
