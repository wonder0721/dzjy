<template>
  <div class="data">
    <div class="wrapper">
      <div class="container-box">
        <p class="platform">端州区网络阅卷平台</p>
        <div class="content-box">
          <el-breadcrumb separator="/" style="font-size: 16px;">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生基础数据录入</el-breadcrumb-item>
          </el-breadcrumb>

          <el-button type="primary" style="margin: 20px 0; float:right">上传学生数据表格</el-button>

          <el-table
            :data="tableData"
            style="width: 100%"
            header-cell-class-name="table-header"
            cell-class-name="table-cell"
          >
            <el-table-column prop="school" label="学校" width="220"></el-table-column>
            <el-table-column prop="grade" label="年级" width="180"></el-table-column>
            <el-table-column prop="class" label="班级" width="180"></el-table-column>
            <el-table-column prop="number" label="考号"></el-table-column>
            <!-- <el-table-column prop="number" label="考号" width="180"></el-table-column> -->
            <el-table-column prop="name" label="姓名" width="150" fixed="right">
            </el-table-column>
          </el-table>

          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pagesize"
              :total="50"
              layout="prev, pager, next, sizes, jumper"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data {
  background-color: #f0f2f5;
  min-height: 100%;
}
.wrapper {
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}
.container-box {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 50px;
  .platform {
    height: 50px;
    width: 100%;
    margin: 50px 0;
    font-size: 40px;
    color: #5896ff;
    line-height: 50px;
    text-align: center;
  }
  .content-box {
    width: 100%;
    background-color: #fff;
    font-size: 20px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    /deep/ .table-header {
      background-color: #fafafa;
      text-align: center;
      font-size: 16px;
      color: #222;
      height: 60px;
    }
    /deep/ .table-cell {
      text-align: center;
    }
    .pagination {
      margin: 20px 0 0 0;
      float: right;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [],
      arr: [],
      currentPage1: 1,
      pagesize: 5
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.$axios
        .get("/student/studentData" + currentPage)
        .then(res => {
          // console.log(this.tableData)
          this.tableData = res.data;
        })
        .catch(err => console.log(err));
    },
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize);
    }
  },
  created() {
    this.handleCurrentChange(1);
  }
};
</script>