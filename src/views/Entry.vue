<template>
  <div>
    <div class="platform">端州区网络阅卷系统平台</div>
    <div id="nav">
      <router-link to="/data" tag="div" class="card">
        <div class="topicon">
          <img src="../assets/data.png" alt />
        </div>
        <div class="subtitle">学生数据录入</div>
      </router-link>
      <router-link to="/paper" tag="div" class="card">
        <div class="topicon">
          <img src="../assets/paper.png" alt />
        </div>
        <div class="subtitle">学生答卷扫描</div>
      </router-link>
      <router-link to="/teacher" tag="div" class="card">
        <div class="topicon">
          <img src="../assets/teacher.png" alt />
        </div>
        <div class="subtitle">教师阅卷</div>
      </router-link>
      <router-link to="/report" tag="div" class="card">
        <div class="topicon">
          <img src="../assets/report.png" alt />
        </div>
        <div class="subtitle">成绩统计报告</div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.platform {
  height: 50px;
  width: 100%;
  margin-top: 125px;
  font-size: 40px;
  color: #5896ff;
  line-height: 50px;
  text-align: center;
}
#nav {
  width: 1200px;
  height: 300px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 105px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card {
    width: 250px;
    height: 280px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    border: 1px solid #EBEEF5;
    border-radius: 10px;
    // box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    .topicon {
      width: 100px;
      height: 100px;
      line-height: 100px;
      position: absolute;
      top: 50px;
      margin-left: -50px;
      left: 50%;
      border: 1px solid #EBEEF5;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s;
      //   box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
      img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
      }
    }
    .subtitle {
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: #222;
      bottom: 70px;
    }
  }
  .card:hover {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  }
  .card:hover .topicon {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

<script>
export default {
    
}
</script>