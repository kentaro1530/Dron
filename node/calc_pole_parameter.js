const pole_Kmp=1.41759
const fit_pole_Kmp= [
    [ 1.42696, 1.41841, 1.40986 ],
    [ 1.4258, 1.42115, 1.41095 ],
    [ 1.43162, 1.41933, 1.40705 ]
];

const pole_KN=1.41833
const fit_pole_KN=[
    [ 1.42729, 1.41932, 1.41135 ],
    [ 1.42631, 1.42206, 1.4122 ],
    [ 1.43206, 1.42016, 1.40826 ]
];

const pole_KzeroN=1.41928
const fit_pole_KzeroN=[ 
    [ 1.42819, 1.42054, 1.4129 ],
    [ 1.42736, 1.4234, 1.41355 ],
    [ 1.4335, 1.42137, 1.40925 ]
];

const width_Kmp=-0.0303362;
const fit_width_Kmp=[
    [ -0.0214156, -0.0286177, -0.0358198 ],
    [ -0.0191713, -0.0216751, -0.0386653 ],
    [ -0.018866, -0.0312165, -0.043567 ]
];

const width_KN=-0.0278259;
const fit_width_KN=[
    [ -0.0196847, -0.0265039, -0.0333231 ],
    [ -0.0173062, -0.0197198, -0.036344 ],
    [ -0.0168113, -0.0294344, -0.0420575 ]
]

const width_KzeroN=-0.0259118;
const fit_width_KzeroN=[
    [ -0.0179143, -0.0247433, -0.0315722 ],
    [ -0.0152542, -0.0176344, -0.0351156 ],
    [ -0.0149012, -0.0279846, -0.041068 ],
]

const dump=(val, low_fit, high_fit, low_stat, high_stat)=>{
    console.log(val.toFixed(1),
		'^{+'+(high_fit-val).toFixed(1)+'}',
		'_{-'+(val-low_fit).toFixed(1)+'}\\mbox{(Fit)}',
		'^{+'+(high_stat-high_fit).toFixed(1)+'}',
		'_{-'+(low_fit-low_stat).toFixed(1)+'}(Stat)',
	       );
}

console.log('==== Gaussian ===');
dump(1000*pole_KN, 1000*fit_pole_KN[0][2], 1000*fit_pole_KN[0][0],
     1000*fit_pole_Kmp[0][2], 1000*fit_pole_KzeroN[0][0]);

dump(1000*width_KN, 1000*fit_width_KN[0][2], 1000*fit_width_KN[0][0],
     1000*fit_width_Kmp[0][2], 1000*fit_width_KzeroN[0][0]);

console.log('==== Gaussian & 2-Gaussian ===');
dump(1000*width_KN, 1000*fit_width_KN[0][2], 1000*fit_width_KN[0][0],
     1000*fit_width_Kmp[0][2], 1000*fit_width_KzeroN[1][0]);

console.log('==== 2-Gaussian ===');
dump(1000*pole_KN, 1000*fit_pole_KN[1][2], 1000*fit_pole_KN[1][0],
     1000*fit_pole_Kmp[1][2], 1000*fit_pole_KzeroN[1][0]);

dump(1000*width_KN, 1000*fit_width_KN[1][2], 1000*fit_width_KN[1][0],
     1000*fit_width_Kmp[1][2], 1000*fit_width_KzeroN[1][0]);

console.log('==== Gaussian mean/RMS(stat) ===');
dump(1000*pole_KN, 1000*fit_pole_KN[0][2], 1000*fit_pole_KN[0][0],
     1000*fit_pole_Kmp[2][2], 1000*fit_pole_KzeroN[2][0]);

dump(1000*width_KN, 1000*fit_width_KN[0][2], 1000*fit_width_KN[0][0],
     1000*fit_width_Kmp[2][2], 1000*fit_width_KzeroN[2][0]);

console.log('==== mean/RMS(stat) ===');
dump(1000*pole_KN, 1000*fit_pole_KN[2][2], 1000*fit_pole_KN[2][0],
     1000*fit_pole_Kmp[2][2], 1000*fit_pole_KzeroN[2][0]);

dump(1000*width_KN, 1000*fit_width_KN[2][2], 1000*fit_width_KN[2][0],
     1000*fit_width_Kmp[2][2], 1000*fit_width_KzeroN[2][0]);
