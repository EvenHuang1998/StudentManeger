import ajax from './utils'

const getDeparList = (that)=>{
    return ajax('/getDeparList',that);
}
const getDeparInfo = (that)=>{
    return ajax('/getDeparInfo',that);  
}
const sendClassInfo = (that,data)=>{
    return ajax('/sendClassInfo',that,data);
}
const getClassInfo = (that,data)=>{
    return ajax('/getClassInfo',that,data);
}
const getStudentInfo = (that,data)=>{
    return ajax('/getStudentInfo',that,data)
}
const deleteStudentInfo = (that,data)=>{
    return ajax('/deleteStudentInfo',that,data)
}
const updateStudentInfo = (that,data)=>{
    return ajax('/updateStudentInfo',that,data)
}
export {
    sendClassInfo,
    getDeparList,
    getDeparInfo,
    getClassInfo,
    getStudentInfo,
    deleteStudentInfo,
    updateStudentInfo
}
