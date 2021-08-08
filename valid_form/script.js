"use strict";

const form1 = document.getElementById("form1");

// создаем функции для валидации полей по пустому (не выбранному значению)
function validDeveloper(autoFocus) {
    let errCount = 0;
    let devField = form1.elements.sitedev;
    let devValue = devField.value;
    let devErr = document.querySelector(".dev-err");

    if (devValue =="") {
        devErr.innerHTML = "Введите автора";
        errCount++;
    } else {
        devErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        devField.focus();
    }
    // условие фокуса только на этом поле
    return errCount;
}

function validSitename(autoFocus) {
    let errCount = 0;
    let sitenameField = form1.elements.sitename;
    let sitenameValue = sitenameField.value;
    let sitenameErr = document.querySelector(".sitename-err");

    if (sitenameValue =="") {
        sitenameErr.innerHTML = "Введите название сайта";
        errCount++;
    } else {
        sitenameErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        sitenameField.focus();
    }
    return errCount;
}

function validSiteURL(autoFocus) {
    let errCount = 0;
    let siteurlField = form1.elements.siteurl;
    let siteurlValue = siteurlField.value;
    let siteurlErr = document.querySelector(".siteurl-err");

    if (siteurlValue =="") {
        siteurlErr.innerHTML = "Введите адрес";
        errCount++;
    } else {
        siteurlErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        siteurlField.focus();
    }
    return errCount;
}

function validSitedate(autoFocus) {
    let errCount = 0;
    let sitedateField = form1.elements.sitedate;
    let sitedateValue = sitedateField.value;
    let sitedateErr = document.querySelector(".sitedate-err");

    if (sitedateValue =="") {
        sitedateErr.innerHTML = "Введите дату запуска сайта";
        errCount++;
    } else {
        sitedateErr.innerHTML = "";
    }

    if (errCount && autoFocus) {
        sitedateField.focus();
    }

    return errCount;
}

function validVisitors(autoFocus) {
    let errCount = 0;
    let visitorsField = form1.elements.visitors;
    let visitorsValue = visitorsField.value;
    let visitorsErr = document.querySelector(".visitors-err");

    if (visitorsValue =="") {
        visitorsErr.innerHTML = "Введите количество посетителей в сутки";
        errCount++;
    }  if (isNaN(visitorsValue)) {
        visitorsErr.innerHTML = "Вы ввели не число! Повторите пожалуйста";
        errCount++;
    // проверка на ввод числа
    }  else {
        visitorsErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        visitorsField.focus();
    }
    return errCount;
}

function validSiteEmail(autoFocus) {
    let errCount = 0;
    let siteemailField = form1.elements.siteemail;
    let siteemailValue = siteemailField.value;
    let siteemailErr = document.querySelector(".siteemail-err");

    if (siteemailValue =="") {
        siteemailErr.innerHTML = "Введите адрес почтового ящика";
        errCount++;
    } else {
        siteemailErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        siteemailField.focus();
    }
    return errCount;
}

function validRubric(autoFocus) {
    let errCount = 0;
    let rubricField = form1.elements.rubric;
    let rubricValue = rubricField.value;
    let rubricErr = document.querySelector(".rubric-err");

    switch(rubricValue) {
        case("0"):
            rubricErr.innerHTML = "Вы не сделали свой выбор";
            errCount++;
        break;
        case ('3'):
            rubricErr.innerHTML = "Раздел в разработке";
            errCount++;
        break;
        default: 
            rubricErr.innerHTML="";
    }
    if (errCount && autoFocus) {
        rubricField.focus();
    }
    return errCount;
}

function validPayment(autoFocus) {
    let errCount = 0;
    let paymentField = form1.elements.payment;
    let paymentValue = paymentField.value;
    let paymentErr = document.querySelector(".payment-err");

    switch(paymentValue) {
        case(""):
            paymentErr.innerHTML = "Вы ничего невыбрали";
            errCount++;
        break;
        case ("1"):
            paymentErr.innerHTML = "Вы не имеете право на бесплатное размещение ";
            errCount++;
        break;

        default: 
            paymentErr.innerHTML="";
    }
    if (errCount && autoFocus) {
            paymentField[2].focus();
    }
    return errCount;
}

function validComments(autoFocus) {
    let errCount = 0;
    let commentsField = form1.elements.comments;
    let commentsErr = document.querySelector(".comments-err");

    if (!commentsField.checked ) {
        commentsErr.innerHTML = "Разрешите отзывы";
        errCount++;
    } else {
        commentsErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        commentsField.focus();
    }
    return errCount;
}

function validDescription(autoFocus) {
    let errCount = 0;
    let descriptionField = form1.elements.description;
    let descriptionValue = descriptionField.value;
    let descriptionErr = document.querySelector(".description-err");

    if (descriptionValue =="") {
        descriptionErr.innerHTML = "Опишите свой сайт";
        errCount++;
    } if (descriptionValue.length<10 && descriptionValue.length>1) {
        descriptionErr.innerHTML = "Описание сайта слишком короткое. Должно быть минимум 10 символов";
        errCount++;
    // проверка на количество символов 
    } else {
        descriptionErr.innerHTML = "";
    }
    if (errCount && autoFocus) {
        descriptionField.focus();
    // фокусировка на элементе и прокрутка к нему
    }
    return errCount;
}

// прописываем валидацию каждого поля 
// "false" прописываем чтобы можно было покинуть поле, даже если там ошибка
document.forms.form1.sitedev.addEventListener ("blur", function() {validDeveloper(false);});
document.forms.form1.sitename.addEventListener ("blur", function() {validSitename(false);});
document.forms.form1.siteurl.addEventListener ("blur", function() {validSiteURL(false);});
document.forms.form1.sitedate.addEventListener ("blur", function() {validSitedate(false);});
document.forms.form1.visitors.addEventListener ("blur", function() {validVisitors(false);});
document.forms.form1.siteemail.addEventListener ("blur", function() {validSiteEmail(false);});
document.forms.form1.rubric.addEventListener ("change", function() {validRubric(false);});
document.forms.form1.payment[0].addEventListener ("change", function() {validPayment(false);});
document.forms.form1.payment[1].addEventListener ("change", function() {validPayment(false);});
document.forms.form1.payment[2].addEventListener ("change", function() {validPayment(false);});
document.forms.form1.comments.addEventListener ("change", function() {validComments(false);});
document.forms.form1.description.addEventListener ("blur", function() {validDescription(false);});


// прописываем функцию валидации всей формы
function validateForm(EO) {
    EO = EO||window.event;

    try {
        let totalErrCount = 0;
        totalErrCount+=validDeveloper(!totalErrCount);
        totalErrCount+=validSitename(!totalErrCount);
        totalErrCount+=validSiteURL(!totalErrCount);
        totalErrCount+=validSitedate(!totalErrCount);
        totalErrCount+=validVisitors(!totalErrCount);
        totalErrCount+=validSiteEmail(!totalErrCount);
        totalErrCount+=validRubric(!totalErrCount);
        totalErrCount+=validPayment(!totalErrCount);
        totalErrCount+=validComments(!totalErrCount);
        totalErrCount+=validDescription(!totalErrCount);

        if ( totalErrCount )
            EO.preventDefault();
    }
    catch(err) {
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        EO.preventDefault(); 
    }
}

form1.addEventListener("submit", validateForm, false);