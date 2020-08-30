<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/exemplo/1">Ex 1</router-link> |
      <router-link to="/exemplo/2">Ex 2</router-link> |
      <router-link to="/exemplo/3">Ex 3</router-link> |
      <router-link to="/exemplo/4">Ex 4</router-link> |
      <router-link to="/exemplo/5">Ex 5</router-link> |
      <router-link to="/exemplo/6">Ex 6</router-link> |
      <router-link to="/exemplo/7">Ex 7</router-link> |
      <router-link to="/exemplo/8">Ex 8</router-link> |
      <router-link to="/exemplo/9">Ex 9</router-link> |
      <router-link to="/exemplo/10">Ex 10</router-link> |
      <router-link to="/exemplo/11">Ex 11</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
