const phoneFields = [

    {
        "div": document.getElementById('phone-number-1'),
        "phone-input": document.getElementsByName("costumer-phone-1")
    },

    {
        "div": document.getElementById('phone-number-2'),
        "phone-input": document.getElementsByName("costumer-phone-2")
    },

    {
        "div": document.getElementById('phone-number-3'),
        "phone-input": document.getElementsByName("costumer-phone-3")
    },

    {
        "div": document.getElementById('phone-number-4'),
        "phone-input": document.getElementsByName("costumer-phone-4")
    }
]

const emailFields = [

    {
        "div": document.getElementById('email-1'),
        "email-input": document.getElementsByName("costumer-email-1"),
    },

    {
        "div": document.getElementById('email-2'),
        "email-input": document.getElementsByName("costumer-email-2"),
    },

    {
        "div": document.getElementById('email-3'),
        "email-input": document.getElementsByName("costumer-email-3"),
    }
];

function createCostumerProfile(event) {

    costumerProfile = {}

    costumerProfile['name'] = document.getElementsByName("costumer-name")[0].value
    costumerProfile['birthday'] = document.getElementsByName("costumer-birth")[0].value

    costumerProfile['driver_license_number'] = document.getElementsByName("costumer-driver-license-number")[0].value
    costumerProfile['driver_license_issued_at'] = document.getElementsByName("costumer-driver-license-date")[0].value

    costumerProfile['state'] = document.getElementsByName("costumer-state")[0].value
    costumerProfile['city'] = document.getElementsByName("costumer-city")[0].value

    costumerProfile['phone_1'] = document.getElementsByName("costumer-phone-1")[0].value
    costumerProfile['phone_2'] = document.getElementsByName("costumer-phone-2")[0].value
    costumerProfile['phone_3'] = document.getElementsByName("costumer-phone-3")[0].value
    costumerProfile['phone_4'] = document.getElementsByName("costumer-phone-4")[0].value

    if(document.getElementById('important-number-1').checked === true){
        costumerProfile['phone_main'] = document.getElementsByName("costumer-phone-1")[0].value
    }

    else if(document.getElementById('important-number-2').checked === true){
        costumerProfile['phone_main'] = document.getElementsByName("costumer-phone-2")[0].value
    }

    else if(document.getElementById('important-number-3').checked === true){
        costumerProfile['phone_main'] = document.getElementsByName("costumer-phone-3")[0].value
    }

    else if(document.getElementById('important-number-4').checked === true){
        costumerProfile['phone_main'] = document.getElementsByName("costumer-phone-4")[0].value
    }

    costumerProfile['email_1'] = document.getElementsByName("costumer-email-1")[0].value
    costumerProfile['email_2'] = document.getElementsByName("costumer-email-2")[0].value
    costumerProfile['email_3'] = document.getElementsByName("costumer-email-3")[0].value

    costumerProfile['sponsor_name'] = document.getElementsByName("costumer-sponsor-name")[0].value
    costumerProfile['sponsor_phone'] = document.getElementsByName("costumer-sponsor-phone")[0].value

    Costumers.all.push(costumerProfile);

    Storage.set(Costumers.all);
    
    alert('Cadastro criado com sucesso')
}

function checkPhoneBox(boxID) {

    document.getElementById('important-number-1').checked = false;
    document.getElementById('important-number-2').checked = false;
    document.getElementById('important-number-3').checked = false;
    document.getElementById('important-number-4').checked = false;

    document.getElementById('important-number-' + boxID).checked = true;

}

function removeEmailFields(emailField) {

    switch (emailField) {

        case 2: {

            document.getElementsByName("costumer-email-2")[0].required = false
            document.getElementsByName("costumer-email-2")[0].value = ''
            emailFields[1]['div'].classList.replace('show','hide')
            break;
        }

        case 3: {

            document.getElementsByName("costumer-email-3")[0].required = false
            document.getElementsByName("costumer-email-3")[0].value = ''
            emailFields[2]['div'].classList.replace('show','hide')
            break;
        }

        default: {
            alert('Erro encontrado na função removeEmailFields')
        }

    }

}

function showMoreEmailFields() {

    for (let i = 0; i < emailFields.length; i++) {

        if(emailFields[i]['div'].classList.contains('hide')) {

            emailFields[i]['div'].classList.replace('hide','show')
            emailFields[i]['email-input'][0].required = true    
            break;
        }

    };

}

function showMorePhoneFields() {

    for (let i = 0; i < phoneFields.length; i++) {

        if (phoneFields[i]['div'].classList.contains('hide')) {

            phoneFields[i]['div'].classList.replace('hide','show')
            phoneFields[i]['phone-input'][0].required = true            
            break;
        }

    };

}

function removePhoneFields(phoneNumber) {

    switch (phoneNumber) {

        case 2: {
            document.getElementsByName("costumer-phone-2")[0].required = false
            document.getElementsByName("costumer-phone-2")[0].value = ''
            phoneFields[1]['div'].classList.replace('show','hide')
            break;
        }

        case 3: {
            document.getElementsByName("costumer-phone-3")[0].required = false
            document.getElementsByName("costumer-phone-3")[0].value = ''
            phoneFields[2]['div'].classList.replace('show','hide')
            break;
        }

        case 4: {
            document.getElementsByName("costumer-phone-4")[0].required = false
            document.getElementsByName("costumer-phone-4")[0].value = ''
            phoneFields[3]['div'].classList.replace('show','hide')
            break;
        }

        default: {
            alert('Erro encontrado na função removePhoneField')
        }

    }

    if (document.getElementById('important-number-4').checked && document.getElementById('phone-number-4').style.display === 'none') {
        document.getElementById('important-number-1').checked = false;
        document.getElementById('important-number-2').checked = false;
        document.getElementById('important-number-4').checked = false;
        document.getElementById('important-number-3').checked = true;
    }

    if (document.getElementById('important-number-3').checked && document.getElementById('phone-number-3').style.display === 'none') {
        document.getElementById('important-number-1').checked = false;
        document.getElementById('important-number-3').checked = false;
        document.getElementById('important-number-4').checked = false;
        document.getElementById('important-number-2').checked = true;
    }

    if (document.getElementById('important-number-2').checked && document.getElementById('phone-number-2').style.display === 'none') {
        document.getElementById('important-number-2').checked = false;
        document.getElementById('important-number-3').checked = false;
        document.getElementById('important-number-4').checked = false;
        document.getElementById('important-number-1').checked = true;
    }

}

function formatPhoneNumber(phoneInput) {

    var inputField = phoneInput
    input = inputField[0].value
    input = input.replace(/\D/g, '');
    var size = input.length;
    if (size > 0) { input = "(" + input }
    if (size > 2) { input = input.slice(0, 3) + ") " + input.slice(3, 14) }
    if (size > 7) { input = input.slice(0, 10) + "-" + input.slice(10, 14) }
    inputField[0].value = input

}

function showCityField() {

    let licenseNumber = document.getElementById('driverLicense-input').value
    let costumerState = document.getElementById('select-state').value

    if (licenseNumber.startsWith("6") && costumerState === 'RN') {

        document.getElementById('costumer-city-field').classList.replace('hide', 'show')
        document.getElementsByName("costumer-city")[0].required = true

    } else {

        document.getElementById('costumer-city-field').classList.replace('show', 'hide')
        document.getElementsByName("costumer-city")[0].required = false
        document.getElementsByName("costumer-city")[0].value = ''

    }

}

function getAge() {

    var formDate = document.getElementById('birth-field').value.split("-");

    var year = new Date().getFullYear()

    if (formDate[0] > year) {
        alert('Você colocou uma data superior ao nosso ano atual.')
        return false
    }

    if (formDate[0] >= 1900) {
        //Caso o cliente tenha nascido em 1900 ou mais o código vai continuar
    } else {

        return false
        
    }

    if (year - formDate[0] >= 18) {

        document.getElementById('license-field-id').classList.replace('hide', 'show')

        document.getElementsByName("costumer-driver-license-number")[0].required = true
        document.getElementsByName("costumer-driver-license-date")[0].required = true

    } else {

        document.getElementById('license-field-id').classList.replace('show', 'hide')

        document.getElementsByName("costumer-driver-license-number")[0].required = false
        document.getElementsByName("costumer-driver-license-number")[0].value = ''

        document.getElementsByName("costumer-driver-license-date")[0].required = false
        document.getElementsByName("costumer-driver-license-date")[0].value = ''

    }

    if (year - formDate[0] < 18) {

        document.getElementById('costumer-sponsor-id').classList.replace('hide', 'show')
        document.getElementsByName("costumer-sponsor-name")[0].required = true
        document.getElementsByName("costumer-sponsor-phone")[0].required = true

    } else {

        document.getElementById('costumer-sponsor-id').classList.replace('show', 'hide')

        document.getElementsByName("costumer-sponsor-name")[0].required = false
        document.getElementsByName("costumer-sponsor-name")[0].value = ''

        document.getElementsByName("costumer-sponsor-phone")[0].required = false
        document.getElementsByName("costumer-sponsor-phone")[0].value = ''

    }

}

const Storage = {

    get() {

        return JSON.parse(localStorage.getItem("meuCredere:costumers")) || [];

    },

    set(costumer) {

        localStorage.setItem("meuCredere:costumers", JSON.stringify(costumer));

    }
}

const Costumers = {
    all: Storage.get()
}