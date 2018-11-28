const showLoading = ()=>{
    this.loading = true;
}
const closeLoading = ()=>{
    this.loading = false;
}
//显示消息的弹框提示，第一个参数指定执行的上下文，第二个参数指定回调函数
const messageBox = (that,action,msg)=>{
    that.$alert(msg, '提示', {
        confirmButtonText: '确定',
        callback: () => {
            console.log('methods:',action)
            action.call(that)
        }
    });
}
const ConfigBox = (that,action,msg)=>{
    that.$alert(msg, '提示', {
        confirmButtonText: '确定',
        callback: () => {
            console.log('methods:',action)
            action.call(that)
        }
    });
}
const notification = (that,msg)=>{
    that.$notify.info({
        title: '消息',
        message: msg
    });
}

export{
    showLoading,
    closeLoading,
    messageBox,
    notification,
    ConfigBox
}