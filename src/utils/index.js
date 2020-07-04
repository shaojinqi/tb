import ajax from './api.js'

// let BASE_URL='/api'
// export const hqtblist =()=>ajax(BASE_URL+'/banners')
//这里引入的是这个文件的ajax，是直接导出了的，可以直接使用

let BASE_URL='/api'
// export const hqtblist =(params)=>ajax.get(BASE_URL+'/random/category/type/count')
export const hqtblist = (aaa)=>ajax.get(BASE_URL+`/random/category/Article/type/Android/count/50`)

//这里的get是引入文件的方法，不能直接使用，要 ajax.方法name  