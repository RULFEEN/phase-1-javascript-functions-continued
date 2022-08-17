
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(location = "go to the office"){
    return `This Monday, I will ${location}.`
};

function wrapAdjective(highlight){
    return function emphatic(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    }    
};
