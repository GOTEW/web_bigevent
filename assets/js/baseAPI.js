//注意：每次调用$.get()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter这个函数
//在这个函数中，可以得到我们给AJAX提供的配置对象
$.ajaxPrefilter(function(options) {

    //在发起真正的Ajax请求之前，统一拼接请求的跟路径
    options.url = 'http://www.liulongbin.top:3007' + option.url
        //统一为有权限的接口，设置headers请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //全局统一挂载 complete回调函数
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 1.强制清空token
            localStorage.removeItem('token')
                // 2.强制跳转到登录页面
            location.href = '/login.html'
        }
    }

})