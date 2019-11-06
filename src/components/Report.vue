<template>
  <div class="report">
    <div class="wrapper">
      <div class="container-box">
        <p class="platform">端州区网络阅卷平台</p>
        <div class="content-box">
          <el-breadcrumb separator="/" style="font-size: 16px;">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生基础数据录入</el-breadcrumb-item>
          </el-breadcrumb>

          <div class="selector">
            <el-select
              v-model="value1"
              placeholder="请选择"
              size="small"
              @change="schoolChange(value1)"
            >
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select
              v-model="value2"
              placeholder="请选择"
              size="small"
              @change="subjectChange(value2)"
            >
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select
              v-model="value3"
              placeholder="请选择"
              size="small"
              @change="formChange(value3)"
            >
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>

          <el-table
            :data="titleTable"
            border
            style="width: 100%; margin-top: 20px;"
            header-cell-class-name="table-header"
            cell-class-name="table-cell"
          >
            <el-table-column prop="a" label="实考" width="70"></el-table-column>
            <el-table-column prop="b" label="平均分" width="70"></el-table-column>
            <el-table-column prop="c" label="极均分" width="70"></el-table-column>
            <el-table-column prop="d" label="最高分" width="70"></el-table-column>
            <el-table-column prop="e" label="最低分" width="70"></el-table-column>
            <el-table-column prop="f" label="全距" width="70"></el-table-column>
            <el-table-column prop="g" label="得分率" width="70"></el-table-column>
            <el-table-column prop="h" label="标准差" width="70"></el-table-column>
            <el-table-column prop="i" label="众数" width="70"></el-table-column>
            <el-table-column prop="j" label="贡献值" width="70"></el-table-column>
            <el-table-column prop="k" label="超均率" width="70"></el-table-column>
            <el-table-column prop="l" label="比均率" width="70"></el-table-column>
            <el-table-column prop="m" label="优秀数" width="70"></el-table-column>
            <el-table-column prop="n" label="优秀率" width="70"></el-table-column>
            <el-table-column prop="o" label="及格数" width="70"></el-table-column>
            <el-table-column prop="p" label="及格率"></el-table-column>
          </el-table>
          <el-table
            :data="classTableData"
            border
            style="width: 100%; margin-top: 20px;"
            header-cell-class-name="table-header"
            cell-class-name="table-cell"
          >
            <el-table-column prop="className" label="班级" width="150" fixed></el-table-column>
            <el-table-column prop="number" label="考号"></el-table-column>
            <el-table-column prop="name" label="姓名" width="90"></el-table-column>
            <el-table-column prop="fullScore" label="总分" width="90"></el-table-column>
            <el-table-column label="总分排名">
              <el-table-column prop="f-class" label="班" width="80"></el-table-column>
              <el-table-column prop="f-grade" label="校" width="80"></el-table-column>
              <el-table-column prop="f-com" label="连" width="80"></el-table-column>
            </el-table-column>
            <el-table-column prop="language" :label="subjectName" width="90"></el-table-column>
            <el-table-column :label="subjectRank">
              <el-table-column prop="l-class" label="班" width="80"></el-table-column>
              <el-table-column prop="l-grade" label="校" width="80"></el-table-column>
              <el-table-column prop="l-com" label="连" width="80"></el-table-column>
            </el-table-column>
          </el-table>

          <div class="pagination">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="5"
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
.report {
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
      height: 40px;
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
      titleTable: [],
      titleArr: [],
      titleNum: 0,
      classTableData: [],
      currentPage1: 1,
      totalArr: [],
      subjectName: '语文',
      subjectRank: '语文排名',
      options1: [
        {
          value: "school_1",
          label: "加美学校中学部"
        },
        {
          value: "school_2",
          label: "端州中学"
        },
        {
          value: "school_3",
          label: "肇庆市颂德中学"
        },
        {
          value: "school_4",
          label: "肇庆市田家炳中学"
        },
        {
          value: "school_5",
          label: "肇庆市第四中学"
        }
      ],
      value1: "school_1",
      options2: [
        {
          value: "subject_1",
          label: "语文"
        },
        {
          value: "subject_2",
          label: "数学"
        }
      ],
      value2: "subject_1",
      options3: [
        {
          value: "form_1",
          label: "学生成绩表"
        },
        {
          value: "form_2",
          label: "总分分段表"
        },
        {
          value: "form_3",
          label: "试卷分析表"
        },
        {
          value: "form_4",
          label: "单科平均表"
        },
        {
          value: "form_5",
          label: "排名分析表"
        },
        {
          value: "form_6",
          label: "一分三率表"
        }
      ],
      value3: "form_1",
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
        this.classTableData = this.totalArr.slice(currentPage*10 - 10,currentPage*10)
    },
    schoolChange(value) {
      console.log("school has changed", value);
      this.getRandomArr()
    },
    subjectChange(value) {
      console.log("subject has changed", value);
      if (value == 'subject_1'){
        this.subjectName = '语文'
        this.subjectRank = '语文成绩'
      }
      else{
        this.subjectName = '数学'
        this.subjectRank = '数学成绩'
      }
      this.getRandomArr()
    },
    formChange(value){
      console.log("form has changed", value);
      // this.getRandomArr()
    },
    getRandomArr(){
      let arr = []
      let num = Math.floor(Math.random()*(this.totalArr.length-10))
      arr = this.totalArr.slice(num,num+10)
      this.classTableData = arr
      if (this.titleNum != 4){
        this.titleNum ++
      }
      else{
        this.titleNum = 0
      }
      this.titleTable.splice(0,1)
      this.titleTable.push(this.titleArr[this.titleNum])
    }
  },
  created() {
    this.$axios
      .get("/report/titleTable")
      .then(res => {
        this.titleArr = res.data
        this.titleTable.push(res.data[this.titleNum])
      })
      .catch(error => console.log(error));

      this.$axios
      .get("/report/total")
      .then(res => {
        this.totalArr = res.data
        this.handleCurrentChange(1)
      })      
      .catch(error => console.log(error));
  }
};
</script>