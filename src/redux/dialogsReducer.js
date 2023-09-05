const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState =  {
    dialogs: [
        {id: 1, name: 'Artur', ava: "https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"},
        {
            id: 2,
            name: 'Denis',
            ava: "https://sun9-10.userapi.com/s/v1/if2/hxmnMGQpovYRFpGqSEhWrMpMwpHs_NV-WzgNenbL3FiYxerSraaNpPKF3O5FdyXlSENU7tEYTcccKxGkIhGsROT4.jpg?size=200x200&quality=96&crop=2,0,357,357&ava=1"
        },
        {
            id: 3,
            name: 'Vadim',
            ava: "https://img.freepik.com/premium-vector/guru-beard-man-indian-face_165162-20.jpg?w=2000"
        },
        {
            id: 4,
            name: 'Vladimir',
            ava: "https://beebom.com/wp-content/uploads/2022/02/Featured.jpg?w=750&quality=75"
        }
    ],
    messages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Nice weather'},
        {id: 3, message: 'How are you?'}
    ],
    newMessageText: "Your turn..",
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "Your turn..";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, message: body})
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (newText) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (newText) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: newText})

export default dialogsReducer;