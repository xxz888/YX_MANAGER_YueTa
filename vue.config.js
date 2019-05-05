module.exports = {
    baseUrl: '/YueTaManger/',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api2':{
                target:'http://thegdlife.com:8002',
                //target:'http://192.168.0.12:8001',
                changeOrigin:true,
                pathRewrite:{
                    '/api2':''
                }
            },
            '/ms':{
                target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
                changeOrigin: true
            }
        }
    }
}
