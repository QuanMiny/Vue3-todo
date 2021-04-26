# todo-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 抽离组件
- 观察设计稿
- 拆分组件
- 拆解复杂组件
- 减少嵌套层数
- 复用组件或功能

### 处理事件和数据
- composition API
```
export default {
  setup(props, context) {
    ref(); // 或 reactive()
    computed();
    // 自定义函数
    watchEffect();
    onMounted();
  }
}
```


### 抽离composables
setup()函数杂糅许多代码,按业务逻辑根据相关性进行分组，定义到单独的函数中,有效提高代码清晰度,抽离函数还可以作为可复用的逻辑单元
- 新建Composable
- 使用use+action命名
- 剪切粘贴已有业务逻辑
- 调用composable
- 返回结果
