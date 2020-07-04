import  axios  from "axios"
import  qs from 'qs'


//配置请求拦截 

axios.interceptors.request.use((confing)=>{
    confing.headers.token='aaaa'
    // return Promise.resolve(confing)
    return confing
},(err)=>{
    return  Promise.reject(err.response)
})

//配置响应拦截

axios.interceptors.response.use((res)=>{
    if(res.status==200) {
          return  res.data
    }else if(res.status==404) {

        console.log('请求错误')

        return  Promise.resolve(res)

    }else if (res.status==304) {
        console.log('服务器缓存重定向了')
        return  Promise.resolve(res)
    }else {
        return  Promise.resolve(res)
    }
},(err)=>{
    return  Promise.reject(err)
})


    export default  {
        //get 请求 
        get(url,params={})  {
            return new Promise((resolve,reject)=>{
                axios({
                    method:'get',
                    url,
                    params:params
    
                }).then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            }) 
        },
    
        //封装post  
        post(url,params={}){
            return new Promise((resolve,reject)=>{
                axios({
                    method:'post',
                    url,
                    data: qs.stringify(params),
                    headers:{
                        'Content-Type' :'application/x-www-form-urlencoded'
                    }
                }).then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    
} 



// import axios from 'axios'
// export default function ajax(url, data = {}, type = 'get') {
//   // 封装promsise的结果 也就是我们的then(res)
//   return new Promise(function (resolve, reject) {
//     let myPromise

//     //第一层封装封装的url请求参数 已经 区别get post 请求
//     if (type == 'get') { //get 请求
//       var dataStr = ''
//       Object.keys(data).forEach(key => {
//         //   console.log(key);
//         //   console.log(data[key]);
//         dataStr += key + '=' + data[key] + '&'
//       })

//       if (dataStr !== '') { //表示有参数
//         // console.log(dataStr);
//         // name=zs&age=18&
//         // url=url+'?'+dataStr
//         var index = dataStr.lastIndexOf('&')
//         // console.log(index);
//         dataStr = dataStr.substring(0, index)
//         url = url + '?' + dataStr
//         myPromise = axios.get(url)  //axios请求返回是一个promise ,结果在then(res)

//       } else { //表示没有参数
//         myPromise = axios.get(url)
//       }




//     } else { // post 请求
//       myPromise=  axios.post(url, data)
//     }
//     //请求我们then的处理
//     myPromise.then(res => {  //axios 里面所有的数据都在data
//       resolve(res.data)
//     }).catch(err => {
//       reject(err)
//     })

//   })





// }
