import Vue from 'vue'

import {
    HQTBLIST,
  
}from './mutation-types.js'

export default {
    [HQTBLIST] (state,{ tblist }){
      

        state.tblist = tblist
    },

}