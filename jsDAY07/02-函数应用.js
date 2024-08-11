// 回调函数
function a(callback){
    callback()
    console.log('我是主函数')
}
function b(){
    // 单位是毫秒
    setTimeout(()=>{
        console.log('我是回调函数')
    },
    3000)
}
a(b)