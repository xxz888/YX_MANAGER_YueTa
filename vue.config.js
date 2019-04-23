module.exports = {
    baseUrl: '/YueTaManger/',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                // target:'http://thegdlife.com:8001',
                target:'http://192.168.0.12:8001',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            }
        }
    }
}
