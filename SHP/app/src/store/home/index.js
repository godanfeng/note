import Vue from 'vue'
import Vuex from 'vuex'
import {reqCategoryList} from '@/api'
Vue.use(Vuex)
const state ={
    categoryList:[],
}
const mutations ={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
}
const actions ={
    async categoryList(commit){
        let result = await reqCategoryList()
        console.log(result)
        if(result.status==200){
            commit(CATEGORYLIST,result.data);
        }
    }
}
const getters ={}
//对外暴露store的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
    
})
