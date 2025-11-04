const fs=require('fs'), path=require('path');

const input  = '/home/kentaro/ana/Dron/run_summary/RunSummary_run68_69.csv';
const output = '/home/kentaro/ana/Dron/run_summary/RunSummary_run68.json';

console.log('===== convert to RunSummary csv to json =====')
console.log('input  :', input);
console.log('output :', output);

const text=fs.readFileSync(input, 'utf-8');
const lines=text.split('\n').map(a=> a.trim()).filter(a=> a.length>0);

const list=[];

for( const l of lines ){
    const words=l.split(',');
    if( words.length<30 ) continue;

    const parsed=wordsToJson(parseWords(words));
    list.push(parsed);
}
console.log(list);
fs.writeFileSync(output, JSON.stringify(list, null, 3));

function parseWords(words){
    const next=[];

    while( words.length>0 ){
	if( words[0].indexOf('\"')!==0 ) next.push(words.shift());
	else{
	    const index=words.findIndex(a=> a.indexOf('\"')===a.length-1);
	    let sub='';
	    for( let i=0; i<=index; i++ ) sub+=words.shift();
	    next.push(sub);
	}
    }
    return next;
}
    

function wordsToJson(words){
    return {
	runnum:       Number.parseInt(words[0]),
	start:        new Date(words[5]),
	end:          new Date(words[6]),
	duration:     new Date(words[7]),
	accPoewr:     Number(words[8]),
	expTarget:    words[9],
	HDTarget:     words[10],
	beamCharge:   words[11],
	D1:           Number(words[12]),
	mom:          Number(words[13]),
	ESS:          Number(words[14]),
	CM:           Number(words[15]),
	beamParticle: words[16],
	trigger:      words[17],
	firstTrig:    Number(words[18]),
	firstAcc:     Number(words[19]),
	Dora:         Number(words[20]),
	USWK:         Number(words[21]),
	FT:           Number(words[22]),
	SYIM:         Number(words[23]),
	TM:           Number(words[24]),
	kaon:         Number(words[25]),
	kaon:         Number(words[26]),
	pion:         Number(words[27]),
	momMax:       Number(words[28]),
	momMin:       Number(words[29]),
	massMax:      Number(words[30]),
	massMin:      Number(words[31]),
	slitXMin:     Number(words[32]),
	slitXMax:     Number(words[33]),
	slitYMin:     Number(words[34]),
	slitYMax:     Number(words[35]),
	isDEF:        words[36],
	Comment:      words[37],
	logNote:      words[38],
	kPurity:      Number(words[39]),
	kOnTarget:    words[40],
	kOnTarget2:   words[41],
	kIntegrated:  words[42],
	timeIntegrated: words[43],
	kWweek:           Number(words[44]),
	kWweekIntegrated: Number(words[45]),
	kPerSpill:        words[46],
	piPerSpill:       words[47],
	kPerPi:           Number(words[48]),
    }
}
