const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month',
        
    },
    showAgeAndLang: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

       languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
        
    });
        console.log(str);
        return str;
}};


personalPlanPeter.showAgeAndLang(personalPlanPeter);
function showExperience(plan) {
const {exp} = plan.skills;
console.log(exp);
return exp;
}
showExperience(personalPlanPeter);


function showProgrammingLangs(plan) {

    let str = '';
    const {programmingLangs} = plan.skills;
    for( let key in programmingLangs){
        str += `Я узучил ${key} на ${programmingLangs[key]} \n`;
    }
    console.log(str);
    return str;

}
showProgrammingLangs(personalPlanPeter);

