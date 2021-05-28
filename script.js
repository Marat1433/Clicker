let currentBalance = 0;
let currentOneClickIncame = 1;
let currentOneSecondIncame = 0;

//Клик
$('.mainClickButton').click(()=>{
    currentBalance += currentOneClickIncame;
    updateBalance(currentBalance) //при клике к балансу добавляется значение равное уровню дохода
})

//Меню апгрейдов
$('.gameUpgradesButton').click(()=>{
    $('.gameUpgradesList').toggle(400) //высвечивается или погасает
})

$('.gameUpgradesList').click((e)=>{
    let clickedBlock = $(e.target).attr('class')
    if(clickedBlock == 'up1' || clickedBlock == 'up2' || clickedBlock == 'up3' ||
     clickedBlock == 'up4' || clickedBlock == 'up5' || clickedBlock == 'up6' ){
           
        if(currentBalance - $(e.target).children('.upCost').text() >= 0){
            $(e.target).toggle(400)
            currentBalance -= $(e.target).children('.upCost').text()
            updateBalance(currentBalance)

            if($(e.target).children('.incomeClick').text()){
                currentOneClickIncame = parseInt($(e.target).children('.incomeClick').text())
            } else {
                currentOneSecondIncame = parseInt($(e.target).children('.incomeSecond').text())
            }  
        }

    }
})


//Авто добыча
let id = setInterval(()=>{

    currentBalance += currentOneSecondIncame
    updateBalance(currentBalance) //каждую секунду прибавляется значение равное уровню дохода

}, 1000)

//Обновление баланса при покупки/клика/и тд тп
function updateBalance(currentBalance){

    $('.userBalance').text(currentBalance)

    //Проверка на кол во долларов в кармане
    for(let i = 1; i<=6; i++){
        let block = '.up' + i
        if($(block).children('.upCost').text() <= currentBalance){
            $(block).css({
                opacity: 1
            }, 400)
        } else {
            $(block).css({
                opacity: 0.35
            }, 400)
        }
    }

}





