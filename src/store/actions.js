import {
    HQTBLIST,
}from './mutation-types.js'
import {
    hqtblist,
   
}from '../utils/index';

export default {
    async getTbList({commit,state}){
        let result = await hqtblist()
        
        // let {category,type }  = state
        // console.log(state.category);
        
        // let par = "/" + "Article"  + "/" + "Android" + 10
        console.log(result.data);
        commit(HQTBLIST,{
            tblist:result.data
        })
    },


}