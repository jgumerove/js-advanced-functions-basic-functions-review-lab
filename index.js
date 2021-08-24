// Your code here

function saturdayFun (activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function (activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective (flair="*") {
    return function(string="special") {
        return (`You are ${flair}${string}${flair}!`)
    }
}

const Calculator = {
    add: function() {
        return 1 + 3
    },

    subtract: function() {
        return 1 - 3
    },

    multiply: function() {
        return 1 * 3
    },

    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(integer, array){

    if(array === []){
        return integer
    }else{
        for(let i = 0; i < array.length; i++){
            integer = array[i](integer);
        }
        return integer
    }

}