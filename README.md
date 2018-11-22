# 概要

VueのコンポーネントをVue-cli3でnpm用のモジュールにビルドして、プライベートリポジトリに公開→別プロジェクトでインストールして使うサンプル。

# ビルド

my-hello-moduleで↓コマンド

```
npm run build-x
```

# プライベートリポジトリ

verdaccioを使用します。

```
# インストール
npm install --global verdaccio

# 実行
verdaccio

#最初はユーザ登録
npm adduser --registry http://localhost:4873

#公開は下記
npm publish --registry http://localhost:4873
```

# 別のプロジェクトで使用する

```
#インストール
npm install my-hello-module --save --registry http://localhost:4873
```

インストール後にグローバル登録

```
#main.js
import Vue from 'vue'
import App from './App.vue'

//↓↓↓ここ
import HelloComponents from 'my-hello-module'

Object.keys(HelloComponents).forEach(name=>{
  Vue.component(name,HelloComponents[name])
})
//↑↑↑ここ

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


# あとはアプリ側
<template>
  <div id="app">
    <HelloLocal msg="Local"/>
    <HelloX msg="use-hello X" />
    <HelloY msg="use-hello Y" />
    <HelloZ msg="use-hello Z" />
  </div>
</template>

<script>
import HelloLocal from './components/HelloLocal.vue'

export default {
  name: 'app',
  components: {
    HelloLocal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


