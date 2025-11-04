const fs=require('fs');

conv('txt/miyagawa_pi0S0_red.txt', 'discussion/txt/miyagawa_pi0S0_red.txt');
conv('txt/miyagawa_pi0S0_blue.txt', 'discussion/txt/miyagawa_pi0S0_blue.txt');
conv('txt/miyagawa_pi0S0_green.txt', 'discussion/txt/miyagawa_pi0S0_green.txt');

conv('txt/miyagawa_pimSp_red.txt', 'discussion/txt/miyagawa_pimSp_red.txt');
conv('txt/miyagawa_pimSp_blue.txt', 'discussion/txt/miyagawa_pimSp_blue.txt');
conv('txt/miyagawa_pimSp_green.txt', 'discussion/txt/miyagawa_pimSp_green.txt');

conv('txt/miyagawa_pipSm_red.txt', 'discussion/txt/miyagawa_pipSm_red.txt');
conv('txt/miyagawa_pipSm_blue.txt', 'discussion/txt/miyagawa_pipSm_blue.txt');
conv('txt/miyagawa_pipSm_green.txt', 'discussion/txt/miyagawa_pipSm_green.txt');

conv('txt/miyagawa_pimS0_red.txt', 'discussion/txt/miyagawa_pimS0_red.txt');
conv('txt/miyagawa_pimS0_blue.txt', 'discussion/txt/miyagawa_pimS0_blue.txt');
conv('txt/miyagawa_pimS0_green.txt', 'discussion/txt/miyagawa_pimS0_green.txt');


// conv('discussion/txt/miyagawa_pi0S0_red.txt', 'discussion/txt_convert/miyagawa_pi0S0_red2.txt');

async function conv(infile, outfile){
    console.log(`Convert ${infile} > ${outfile} START`);
    let text=fs.readFileSync(infile).toString();
    while( text.indexOf(',')>0 ) text=text.replace(',', ' ');

    const map=text.split('\n').map(a=> a.split(' ').filter(a=> a.length>0)).filter(a=> a.length===2);
    map.sort((a, b)=>{
	if( a[0]<b[0] ) return -1;
	else return 1;
    });
    let outText='';
    for( const a of map ){
	outText+=a[0]+'\t'+a[1]+'\n';
    }
    console.log(`Convert ${infile} > ${outfile}  START`);
    console.log(outText);
    fs.writeFileSync(outfile, outText);
}

