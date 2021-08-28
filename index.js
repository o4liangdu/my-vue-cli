#!/usr/bin/env node

// 原生获取命令行参数的方式比较麻烦
// console.log(process.argv)

const { Command } = require('commander');
const program = new Command();
const download = require("download-git-repo")

program
  .version('0.1.0')

program
  .command('init <templateName> <projectName>')
  .description('初始化项目模版')
  .action((templateName, projectName) => {
    // env = env || 'all';
    console.log('read config from %s', templateName, projectName);
    download("https://github.com/o4liangdu/vue-h5-template.git#master", projectName, {clone: true},err => {
        if(err) {
            console.error("😵 下载失败", err)
        } else {
            console.log("😬 下载成功")
        }
    })
  });

program
  .command('list')
  .description('查看所有可用模版')
  .action(() => {
    console.log(`
    a模版
    b模版
    `)
  });

program.parse(process.argv);