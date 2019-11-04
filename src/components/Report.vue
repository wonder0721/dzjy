<template>
  <div class="report">
    <div class="container-box">
      <p class="platform">端州区网络阅卷平台</p>
      <div class="content-box">
        <el-breadcrumb separator="/" style="font-size: 16px;">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>学生基础数据录入</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="selector">
          <el-select v-model="value1" placeholder="请选择" size="small" @change="schoolChange()">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select v-model="value2" placeholder="请选择" size="small" @change="subjectChange()">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>

        <el-table
          :data="totalTableData"
          border
          style="width: 100%; margin-top: 20px;"
          header-cell-class-name="table-header"
          cell-class-name="table-cell"
        >
          <el-table-column prop="a" label="实考"></el-table-column>
          <el-table-column prop="b" label="平均分"></el-table-column>
          <el-table-column prop="c" label="极均分"></el-table-column>
          <el-table-column prop="d" label="最高分"></el-table-column>
          <el-table-column prop="e" label="最低分"></el-table-column>
          <el-table-column prop="f" label="全距"></el-table-column>
          <el-table-column prop="g" label="得分率"></el-table-column>
          <el-table-column prop="h" label="标准差"></el-table-column>
          <el-table-column prop="i" label="众数"></el-table-column>
          <el-table-column prop="j" label="贡献值"></el-table-column>
          <el-table-column prop="k" label="超均率"></el-table-column>
          <el-table-column prop="l" label="比均率"></el-table-column>
          <el-table-column prop="m" label="优秀数"></el-table-column>
          <el-table-column prop="n" label="优秀率"></el-table-column>
          <el-table-column prop="o" label="及格数"></el-table-column>
          <el-table-column prop="p" label="及格率"></el-table-column>
        </el-table>
        <el-table
          :data="classTableData"
          border
          style="width: 100%; margin-top: 20px;"
          header-cell-class-name="table-header"
          cell-class-name="table-cell"
        >
          <el-table-column prop="class" label="单位" width="150px"></el-table-column>
          <el-table-column prop="a" label="实考"></el-table-column>
          <el-table-column prop="b" label="平均分"></el-table-column>
          <el-table-column prop="c" label="极均分"></el-table-column>
          <el-table-column prop="d" label="最高分"></el-table-column>
          <el-table-column prop="e" label="最低分"></el-table-column>
          <el-table-column prop="f" label="全距"></el-table-column>
          <el-table-column prop="g" label="得分率"></el-table-column>
          <el-table-column prop="h" label="标准差"></el-table-column>
          <el-table-column prop="i" label="众数"></el-table-column>
          <el-table-column prop="j" label="贡献值"></el-table-column>
          <el-table-column prop="k" label="超均率"></el-table-column>
          <el-table-column prop="l" label="比均率"></el-table-column>
          <el-table-column prop="m" label="优秀数"></el-table-column>
          <el-table-column prop="n" label="优秀率"></el-table-column>
          <el-table-column prop="o" label="及格数"></el-table-column>
          <el-table-column prop="p" label="及格率"></el-table-column>
        </el-table>

        <div class="pagination">
          <el-pagination
            background
            :current-page="currentPage1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="5"
            :total="100"
            layout="prev, pager, next, sizes, jumper"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.report {
  background-color: #f0f2f5;
  min-height: 100%;
}

.container-box {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  overflow: hidden;
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
      color: #444;
      height: 60px;
      font-weight: normal;
    }
    /deep/ .table-cell {
      text-align: center;
    }
    .selector {
      /deep/ .el-select {
        margin-top: 20px;
        margin-right: 30px;
        .el-input--small .el-input__inner {
          background-color: #eef4ff;
        }
      }
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
      totalTableData: [],
      classTableData: [],
      currentPage1: 1,
      options1: [
        {
          value: "选项1",
          label: "重庆市第一中学"
        },
        {
          value: "选项2",
          label: "重庆市第十中学"
        }
      ],
      value1: "选项1",
      options2: [
        {
          value: "选项1",
          label: "语文"
        },
        {
          value: "选项2",
          label: "数学"
        }
      ],
      value2: "选项1"
    };
  },
  methods: {
    schoolChange(value) {
      console.log("school has changed", value);
    },
    subjectChange(value) {
      console.log("subject has changed", value);
    }
  },
  created() {
    this.$axios
      .get("/report/school_1")
      .then(res => {
        console.log(res),
          (this.totalTableData = res.data.totalTableData),
          (this.classTableData = res.data.classTableData);
      })
      .catch(error => console.log(error));
  }
};
</script>