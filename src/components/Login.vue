<template>
  <div class="login">
    <div class="login-box">
      <h2>端州区教育局阅卷平台</h2>
      <div class="content-box">
        <img src="../assets/group.png" alt="img" />
        <div class="form-box">
          <h4>用户登录</h4>

          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="name">
              <el-input v-model="loginForm.name" prefix-icon="iconfont dzjy-user" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                prefix-icon="iconfont dzjy-password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <a class="login-btn" @click="submitForm('loginForm')">登录</a>
            </el-form-item>
          </el-form>

          <p class="tips">如忘记密码, 请联系管理员</p>
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
  overflow: hidden;
  .login-box {
    width: 880px;
    height: 560px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #5897ff;
    border-radius: 6px;
    text-align: center;
    h2 {
      margin-top: 39px;
      margin-bottom: 46px;
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 5px;
    }
    .content-box {
      position: absolute;
      width: 100%;
      height: 400px;
      top: 120px;
      // background-color: lightblue;
      img {
        position: absolute;
        left: 80px;
        top: 0;
      }
      .form-box {
        padding-top: 50px;
        position: absolute;
        right: 80px;
        top: 0;
        height: 400px;
        width: 300px;
        /deep/ .el-input {
          .iconfont {
            font-size: 26px;
          }
          .el-input__prefix {
            left: 10px;
          }
          .el-input__inner {
            padding-left: 60px;
          }
          .el-input__icon {
            padding-right: 10px;
            border-right: 1px #c0c4cc solid;
          }
        }
        h4 {
          font-size: 18px;
          color: #646464;
          text-align: left;
          margin-bottom: 18px;
        }
        .tips {
          font-size: 12px;
          color: #838383;
        }
        .login-btn {
          display: block;
          height: 40px;
          width: 100%;
          line-height: 40px;
          color: #fff;
          border-radius: 2px;
          background-color: #409eff;
          text-align: center;
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 10px;
          margin: 40px 0 20px;
        }
        .login-btn:hover {
          background-color: #1862ff;
        }
        .login-btn:active {
          background-color: #409eff;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      username: "18225602456",
      password: "123456",
      loginForm: {
        name: "18225602456",
        password: "123456",
      },
       rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
       }
    };
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message('登录成功');
          this.$router.push({name:'index'})
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
};
</script>