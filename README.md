## node版本
v12.15.0


## 工程启动(开三个终端单独启动)
1、启动vue-cli创建的子工程 npm run serve-subapp-vue-cli
2、启动nuxt-cli创建的子工程 npm run serve-subapp-nuxt-cli
3、启动主工程 npm run serve-main-html

### 安装node-modules：
1、cd ./app-main-html 切换目录，并运行 npm install
2、cd ./app-subapp-vue-cli 切换目录，并运行 npm install
3、cd ./app-subapp-nuxt-cli 切换目录，并运行 npm install

## 目录结构说明
1、app-subapp-vue-cli：vue-cli创建的vue2工程

## 工程修改说明

对于nuxt-micro-frontend的qiankun的示，官方文档有没说明白的地方：

### 涉及文档：
1、nuxt-micro-frontend 文档：https://github.com/FEMessage/nuxt-micro-frontend/blob/dev/README-zh.md
2、nuxt文档：https://nuxtjs.org/docs/configuration-glossary/configuration-router
3、乾坤文档：https://qiankun.umijs.org/zh/guide

### 对于子工程（sub-app）:
1、nuxt工程用cli工具创建就行
2、nuxt工程必须是single-spa模式，即：cli创建工程时直接选择spa模式，或者nuxt.config.js中”mode”字段设置为“spa”或者设置"ssr"字段
3、对应文档1中的module配置，配置成：  modules: ['@femessage/nuxt-micro-frontend']   即可
4、nuxt工程中配置”MFE”字段，配置的方法是将git上nuxt-micro-frontend 工程下载，参考examples文件夹下的工程中配置即可，不要忘了拷贝示例中的mfe.js文件(和nuxt.config.js文件层级相同)
5、nuxt.config.js文件中记得配置http的返回header，通过build字段设置，方法试了很多，只有这一种配置可以：
build: {
    devMiddleware: {
      headers: (req, res, context) => {
        res.setHeader("Access-Control-Allow-Origin", '*');
      },
    }
  }
6、关于路由，子应用的路由不能使用固定的路由配置，因为要配置到主应用中（主应用中肯定要给每个子应用分一个一级路径）。解决方案暂时两种：1、git的nuxt-micro-frontend 例子中的 nuxt-micro-frontend/examples/vue-cli-main-demo/nuxt-subapp/router 中进行的是动态路由 2、可以考虑参考第一种方案的思想通过不同的环境配置来通过nuxt.config.js中的”router.base”字段(https://nuxtjs.org/docs/configuration-glossary/configuration-router)设置base路由


### 对于主应用/入口应用（main-app）:
1、如果主应用是使用普通qiankun工程，比如最原始的原生HTML+JavaScript，直接抄qiankun官网的例子配置子工程路由就行
2、如果主应用是nuxt应用，则路由配置参考 nuxt-micro-frontend/examples/nuxt-main-register-demo/nuxt-qiankun-project/pages/index.vue中路由的注册方法