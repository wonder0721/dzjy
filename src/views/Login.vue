<template>
  <div class="login">
    <h1>this is login page</h1>
    <router-link to="/index">Go</router-link>
    <div class="login-box">
      <h2>端州区教育局阅卷平台</h2>
      <div class="content-box">
        <img src="../assets/group.png" alt="img" />
        <div class="form-box">
          <a href="https://office.7net.cc/" class="login-btn">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  min-height: 100%;
  background-color: #1f74fd;
  background-image: url("../assets/bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  data() {
    return {
      msg: "abc"
    };
  }
};
</script>