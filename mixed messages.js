const setA1=["Life","The storm","Love","pain","The Climb"]
const setA2=[" is"," becomes"," turns"," emerges as"," turns out to be"]
const setA3=[" beautiful."," growth."," awesome."," peace."," a blessing."]

const setB1=["One","We","People","Someone","A person"]
const setB2=[" Could"," might"," may perhaps"," may possibly"," Can"]
const setB3=[" change the world."," make a difference."," write the future."," make history."," Heal the past."]

const setC1=["Money","Wealth","Love","Family","Good Fortune"]
const setC2=[" Comes to"," is recieved by"," is gifted to"," is found by"," is delivered to"]
const setC3=[" The Patient."," The Generous."," The pure of heart."," those who believe."," The Brave."]




const inspirationalQuote=()=>{
    var set= Math.floor(Math.random(0)*3)
    var i = Math.floor(Math.random(0)*5)
    var j = Math.floor(Math.random(0)*5)
    var k = Math.floor(Math.random(0)*5)
    //console.log(set)
    if (set < 1){console.log(`${setA1[i]}` + `${setA2[j]}` + `${setA3[k]}`)}
    else if (set < 2) {console.log (`${setB1[i]}` + `${setB2[j]}` + `${setB3[k]}`)}
    else {console.log (`${setC1[i]}` + `${setC2[j]}` + `${setC3[k]}`)};
}
inspirationalQuote()
