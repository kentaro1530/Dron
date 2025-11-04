const fs=require('fs'), path=require('path');

const input='modelB.csv';
const out_pimSp='pimSp_B.txt';
const out_pipSm='pipSm_B.txt';
const out_pi0S0='pi0S0_B.txt';
const out_pimS0='pimS0_B.txt';
const out_ave='ave_B.txt';

const txt=fs.readFileSync(input, 'utf-8');

const arr2D=txt.split('\n').map(a=> a.split('\t').filter(a=> a.length>0)).slice(1, -1);

const outText=(name, mass, value)=>{
    let txt='';
    for( let i=0; i<mass.length; i++ ) txt+=mass[i]+'\t'+value[i]+'\n';
    fs.writeFileSync(name, txt);
//    console.log(txt);
}

// outText(out_pipSm, arr2D.map(a=> a[0]), arr2D.map(a=> a[1]));
// outText(out_pimSp, arr2D.map(a=> a[2]), arr2D.map(a=> a[3]));
// outText(out_pi0S0, arr2D.map(a=> a[4]), arr2D.map(a=> a[5]));
// outText(out_ave,   arr2D.map(a=> a[0]), arr2D.map(a=> 0.5*(Number(a[1])+Number(a[3]))));

outText(out_pimS0, arr2D.map(a=> a[0]), arr2D.map(a=> Number(a[1])+Number(a[3])-2*Number(a[5]) ));
