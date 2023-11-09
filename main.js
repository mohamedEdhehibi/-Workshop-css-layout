let tab=[2,6,4,1,10,-2,2]
tab.sort((a,b)=>b-a)
let b = tab.find(a =>{return a==-4;} )
console.log(tab);
console.log('b =',b);
if(b== undefined)
console.log('l\'element n\'existe pas dans le table TAB');
else
console.log('l\'element est existe dans le table TAB');
