const Mock = require('mockjs');

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/student/studentData1', 'get', require('./json/studentData1'));
Mock.mock('/student/studentData2', 'get', require('./json/studentData2'));

Mock.mock('/report/school_1', 'get', require('./json/school_1'));