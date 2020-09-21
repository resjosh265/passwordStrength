//variables to make the password the highest rating
var minLength = 10;
var minNumber = 1;
var minUppercase = 1;
var minSpecial = 1;

document.addEventListener('DOMContentLoaded', () => {
    let indicatorElement = document.getElementById('indicatorPlacement');

    if(indicatorElement != null){
        indicatorElement.innerHTML = '<div class="passwordStrength"><div class="strengthContainer"><div id="indicator1" class="strengthIndicator indicatorBlock"></div><div id="indicator2" class="strengthIndicator indicatorBlock"></div><div id="indicator3" class="strengthIndicator indicatorBlock"></div><div id="indicator4" class="strengthIndicator indicatorBlock"></div><div id="strength" class="strengthIndicator">weak</div></div></div>';
    }
    
    let tipsElement = document.getElementById('tipsPlacement');
    
    if(tipsElement != null){
        tipsElement.innerHTML = '<div class="passwordTips"><div><h2>Tips for strong passwords</h2></div><div><span id="minLength"></span> characters or longer in length</div><div><span id="minNumber"></span> numbers or more</div><div><span id="minUppercase"></span> uppercase letters or more</div><div><span id="minSpecial"></span> special characters or more</div></div>';
    
        document.getElementById('minLength').innerHTML = minLength;
        document.getElementById('minNumber').innerHTML = minNumber;
        document.getElementById('minUppercase').innerHTML = minUppercase;
        document.getElementById('minSpecial').innerHTML = minSpecial;
    }
});

function evaluatePassword(password){
    let length = password.value.length;
    let upperCount = getUpperCount(password.value);
    let numberCount = getNumberCount(password.value);
    let specialCount = getSpecialCount(password.value);
    let strength = 0;

    if(length < minLength){
        strength = 1;
    }else{
        strength++;
        if(upperCount >= minUppercase){
            strength++;
        }else if(upperCount < minUppercase && upperCount != 0){
            strength+= 0.5;
        }

        if(numberCount >= minNumber){
            strength++;
        }else if(numberCount < minNumber && numberCount != 0){
            strength+= 0.5;
        }

        if(specialCount >= minSpecial){
            strength++;
        }else if(specialCount < minSpecial && specialCount != 0){
            strength+= 0.5;
        }
    }

    buildIndicator(Math.floor(strength));
}

function getSpecialCount(password){
    let regex = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    let specialCharacters = password.match(regex);

    return specialCharacters == null ? 0 : specialCharacters.length;
}

function getNumberCount(password){
    let regex = /[0-9]/g;
    let numbers = password.match(regex);
    
    return numbers == null ? 0 : numbers.length;
}

function getUpperCount(password){
    let regex = /[A-Z]/g;
    let upper = password.match(regex);
    
    return upper == null ? 0 : upper.length;
}

function buildIndicator(strength){
    //reset indicators
    for(var i = 1; i <= 4; i++){
        document.getElementById('indicator' + i).classList.remove('red', 'yellow', 'green');
    }

    switch(strength){
        case 1:
            document.getElementById('indicator1').classList.add('red');
            document.getElementById('strength').innerHTML = 'weak';
            break;
        case 2:
            document.getElementById('indicator1').classList.add('yellow');
            document.getElementById('indicator2').classList.add('yellow');
            document.getElementById('strength').innerHTML = 'fair';
            break;
        case 3:
            document.getElementById('indicator1').classList.add('green');
            document.getElementById('indicator2').classList.add('green');
            document.getElementById('indicator3').classList.add('green');
            document.getElementById('strength').innerHTML = 'good';
            break;
        case 4:
            document.getElementById('indicator1').classList.add('green');
            document.getElementById('indicator2').classList.add('green');
            document.getElementById('indicator3').classList.add('green');
            document.getElementById('indicator4').classList.add('green');
            document.getElementById('strength').innerHTML = 'excellent';
            break;
    }
}