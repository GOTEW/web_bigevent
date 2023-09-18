//注意：每次调用$.get()或$.post()或$.ajax()的时候
//会先调用ajaxPrefilter这个函数
//在这个函数中，可以得到我们给AJAX提供的配置对象
$.ajaxPrefilter(function() {

    //在发起真正的Ajax请求之前，统一拼接请求的跟路径
    option.url = 'http://www.liulongbin.top:3007' + option.url
    console.log(option.url)
})