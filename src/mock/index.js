const Mock = require('mockjs');

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/student/studentData1', 'get', require('./json/studentData1'));
Mock.mock('/student/studentData2', 'get', require('./json/studentData2'));
Mock.mock('/student/studentData3', 'get', require('./json/studentData3'));
Mock.mock('/student/studentData4', 'get', require('./json/studentData4'));
Mock.mock('/student/studentData5', 'get', require('./json/studentData5'));

// Mock.mock('/report/school_1', 'get', require('./json/school_1'));
// Mock.mock('/report/school_2', 'get', require('./json/school_2'));
// Mock.mock('/report/subject_1', 'get', require('./json/subject_1'));
// Mock.mock('/report/subject_2', 'get', require('./json/subject_2'));

// Mock.mock('/report/report1', 'get', require('./json/report1'));
// Mock.mock('/report/report2', 'get', require('./json/report2'));
// Mock.mock('/report/report3', 'get', require('./json/report3'));
// Mock.mock('/report/report4', 'get', require('./json/report4'));
// Mock.mock('/report/report5', 'get', require('./json/report5'));

Mock.mock('/report/total', 'get', require('./json/total'));

Mock.mock('/report/titleTable', 'get', require('./json/titleTable'));
