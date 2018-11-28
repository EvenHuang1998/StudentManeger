import qs from 'qs'
var ajax = function(url,that,data=null){
    return new Promise((resolve,reject)=>{
        var config = {
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          method: 'post'
        };
        that.$axios.post(`/api${url}`,qs.stringify(data),config)
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}
export default ajax