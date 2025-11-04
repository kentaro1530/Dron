const fs=require('fs'), path=require('path');

const input='run_summary/RunSummary_run68.json';
console.log('===== read Run Summary Json =====');
console.log('> Input :',input);

const list=JSON.parse(fs.readFileSync(input, 'utf-8'));
const scanList=list.filter(a=> a.Comment.includes('scan'));

console.log(scanList.map(a=> a.runnum));
console.log(scanList.length);
