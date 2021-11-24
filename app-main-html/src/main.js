import {registerMicroApps, start} from 'qiankun';

// 注册子应用
registerMicroApps([
    {
        name: 'vueApp',
        entry: '//localhost:8001',
        container: '#container-vue',
        activeRule: '/app-vue',
    },
    {
        name: 'vueNuxt',
        entry: '//localhost:8002',
        container: '#container-nuxt',
        activeRule: '/app-nuxt',
    },
]);

// 启动 qiankun
start();
