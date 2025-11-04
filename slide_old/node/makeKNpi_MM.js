const fs=require('fs'), path=require('path');

const templateTex=fs.readFileSync('template/KNpi_MM.tex', 'utf-8');

console.log(templateTex);

let dirName='KN_ana_NC160_3sigma/KNpi_MM';
if( fs.exists(dirName)===false ) fs.mkdirSync(dirName);

for( let i=0; i<25; i++ ){
    writeFile(dirName, i);
}

function writeFile(dirName, i){
    const outTex=replaceTemplate(i);
    fs.writeFileSync(path.join(dirName, 'KNpi_MM_'+i+'.tex'), replaceTemplate(i));

}

function replaceTemplate(i){
    let out=templateTex;
    
    const range=(1350+10*i)+'\\sim'+(1360+10*i);

    out=out.replace('\\range', range);
    out=out.replace('\\index', i);
    console.log(out);

    return out;
}
