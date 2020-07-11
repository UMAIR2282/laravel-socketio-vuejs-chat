/*
 |-------------------------------------------------------------------------------
 | VUEX store.js
 |-------------------------------------------------------------------------------
 | Builds the data store from all of the modules for the Roast app.
 */



import Vue from 'vue'
import Vuex from 'vuex'


Vue.use( Vuex )


import { chatUsers } from './chat-users.js';


export default new Vuex.Store({
    modules: {
        chatUsers
    }
});
