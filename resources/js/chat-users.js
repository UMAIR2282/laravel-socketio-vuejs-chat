/*
 |-------------------------------------------------------------------------------
 | VUEX boardcategories.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the cafes
 */


export const chatUsers = {
    /*
     Defines the state being monitored for the module.
     */
    state: {
        charUsers: [],
        chatUsersLoadStatus: 0,
    },

    /*
     Defines the actions used to retrieve the data.
     */
    actions: {
        loadChatUsers( { commit } ){
            commit( 'setBoardCategoriesLoadStatus', 1 );
            let url = API_URL + CHAT_USERS_ENDPOINT;

            axios.get(url)
                .then( function( response ){
                    commit( 'chatUsers', response.data);
                    commit( 'setChatUsersLoadStatus', 2 );
                })
                .catch( function(){
                    commit( 'chatUsers', [] );
                    commit( 'setChatUsersLoadStatus', 3 );
                });
        },
    },

    mutations: {

        setChatUsersLoadStatus: function( state, status ){
            state.chatUsersLoadStatus = status;
        },

        setChatUsers: function( state, data ){
            state.chatUsers = data;
        },
    },

    getters: {

        getChatUsersLoadStatus: function( state ){
            return state.chatUsersLoadStatus;
        },

        getChatUsers: function( state ){
            return state.chatUsers;
        }
    }
}