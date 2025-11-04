const fs=require('fs'), path=require('path');

const input=process.argv[2];
console.log('===== read Run Summary Json =====');
console.log('> Input :',input);

const list=JSON.parse(fs.readFileSync(input, 'utf-8'));
const productionList=list.filter(a=> a.Comment.includes('production'));

console.log(productionList.length);
