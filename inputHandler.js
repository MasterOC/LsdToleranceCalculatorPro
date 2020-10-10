var listIndex = 0;

function addDose(dose, days){
    //validate inputs
    if(!isNormalInteger(dose.val()) || !isNormalInteger(days.val())){
        $('#alert-only-numbers').fadeIn().delay(3000).fadeOut();

        return;
    }
    if(parseInt(days.val()) > 12 || parseInt(days.val()) < 1){
        $('#alert-only-days').fadeIn().delay(3000).fadeOut();

        return;
    }

    //add to chart
    addDoseToList(parseInt(dose.val()), parseInt(days.val()));

    //add html
    var htmlString = getListHTML(listIndex, dose.val(), days.val()).toString();

    if(listIndex === 0){
        $('#list').prepend(htmlString);
    }else{
        $(htmlString).insertAfter( $('#list-item-'+(listIndex-1)));
    }

    var listItem = $('#list-item-' + listIndex);
    listIndex++;
    

    //clear inputs
    dose.val('');
    days.val('');

    //updateChart
    calculate();
}

function getListHTML(index, dose, days){
    return '<a class="list-group-item list-group-item-action" id="list-item-'+index+'"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">Dose '+(index+1)+'</h5><small>'+days+' days ago</small></div><p class="mb-1">'+dose+'µg</p></a>';
}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}
