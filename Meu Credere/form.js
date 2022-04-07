document.getElementById('license-field-id').style.display = 'none'
document.getElementById('costumer-city-field').style.display = 'none'

document.getElementById('phone-number-2').style.display = 'none'
document.getElementById('phone-number-3').style.display = 'none'
document.getElementById('phone-number-4').style.display = 'none'

document.getElementById('constumer-sponsor-id').style.display = 'none'

document.getElementById('email-2').style.display = 'none'
document.getElementById('email-3').style.display = 'none'

const phoneFields = [

    {
        "div": document.getElementById('phone-number-1'),
        "showDiv": true,
        "phone-input": document.getElementsByName("costumer-phone-1")
    },

    {
        "div": document.getElementById('phone-number-2'),
        "showDiv": false,
        "phone-input": document.getElementsByName("costumer-phone-2")
    },

    {
        "div": document.getElementById('phone-number-3'),
        "showDiv": false,
        "phone-input": document.getElementsByName("costumer-phone-3")
    },

    {
        "div": document.getElementById('phone-number-4'),
        "showDiv": false,
        "phone-input": document.getElementsByName("costumer-phone-4")
    }
]

const emailFields = [

    {
        "div": document.getElementById('email-1'),
        "showDiv": true,
        "email-input": document.getElementsByName("costumer-email-1"),
    },

    {
        "div": document.getElementById('email-2'),
        "showDiv": false,
        "email-input": document.getElementsByName("costumer-email-2"),
    },

    {
        "div": document.getElementById('email-3'),
        "showDiv": false,
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

    //ADicionar aqui o telefone principal marcado pelo check box

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
            emailFields[1]['showDiv'] = false

            emailFields[1]['div'].style.backgroundColor = '#ff000080'

            window.setTimeout(function () {
                emailFields[1]['div'].style.opacity = 0
                emailFields[1]['div'].style.display = 'none'
            }, 250);

            break;

        }

        case 3: {

            document.getElementsByName("costumer-email-3")[0].required = false
            document.getElementsByName("costumer-email-3")[0].value = ''
            emailFields[2]['showDiv'] = false;

            emailFields[2]['div'].style.backgroundColor = '#ff000080';

            window.setTimeout(function () {
                emailFields[2]['div'].style.opacity = 0;
                emailFields[2]['div'].style.display = 'none';
            }, 250);

            break;

        }

        default: {
            alert('Erro encontrado na função removeEmailFields')
        }

    }

}

function showMoreEmailFields() {

    for (let i = 0; i < emailFields.length; i++) {

        if (emailFields[i]['showDiv'] === false) {

            emailFields[i]['div'].style.display = 'table-row'
            emailFields[i]['showDiv'] = true
            emailFields[i]['email-input'][0].required = true
            emailFields[i]['div'].style.backgroundColor = '#00ff0080';

            window.setTimeout(function () {
                emailFields[i]['div'].style.opacity = 1;
                emailFields[i]['div'].style.backgroundColor = 'transparent';
            }, 250);
            break;

        }

    };

}

function showMorePhoneFields() {

    for (let i = 0; i < phoneFields.length; i++) {

        if (phoneFields[i]['showDiv'] === false) {

            phoneFields[i]['div'].style.display = 'table-row'
            phoneFields[i]['showDiv'] = true
            phoneFields[i]['phone-input'][0].required = true
            phoneFields[i]['div'].style.backgroundColor = '#00ff0080';

            window.setTimeout(function () {
                phoneFields[i]['div'].style.opacity = 1;
                phoneFields[i]['div'].style.backgroundColor = 'transparent';
            }, 250);
            
            break;

        }

    };

}

function removePhoneFields(phoneNumber) {

    switch (phoneNumber) {

        case 2: {
            document.getElementsByName("costumer-phone-2")[0].required = false
            document.getElementsByName("costumer-phone-2")[0].value = ''
            phoneFields[1]['showDiv'] = false;

            phoneFields[1]['div'].style.backgroundColor = '#ff000080';

            window.setTimeout(function () {
                phoneFields[1]['div'].style.opacity = 0;
                phoneFields[1]['div'].style.display = 'none';
            }, 250);


            break;
        }

        case 3: {
            document.getElementsByName("costumer-phone-3")[0].required = false
            document.getElementsByName("costumer-phone-3")[0].value = ''
            phoneFields[2]['showDiv'] = false;

            phoneFields[2]['div'].style.backgroundColor = '#ff000080';

            window.setTimeout(function () {
                phoneFields[2]['div'].style.opacity = 0;
                phoneFields[2]['div'].style.display = 'none';
            }, 250);

            break;
        }

        case 4: {
            document.getElementsByName("costumer-phone-4")[0].required = false
            document.getElementsByName("costumer-phone-4")[0].value = ''
            phoneFields[3]['showDiv'] = false;

            phoneFields[3]['div'].style.backgroundColor = '#ff000080';

            window.setTimeout(function () {
                phoneFields[3]['div'].style.opacity = 0;
                phoneFields[3]['div'].style.display = 'none';
            }, 250);

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

        document.getElementById('costumer-city-field').style.display = 'grid'
        document.getElementById('costumer-city-field').style.backgroundColor = '#00ff0080'
        document.getElementsByName("costumer-city")[0].required = true

        window.setTimeout(function () {
            document.getElementById('costumer-city-field').style.opacity = 1
            document.getElementById('costumer-city-field').style.backgroundColor = 'transparent'
        }, 250);

    } else {

        document.getElementById('costumer-city-field').style.display = 'none'
        document.getElementsByName("costumer-city")[0].required = false
        document.getElementsByName("costumer-city")[0].value = ''
        document.getElementById('costumer-city-field').style.opacity = 0;
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

        document.getElementById('license-field-id').style.display = 'none'
        document.getElementsByName("costumer-driver-license-number")[0].required = false
        document.getElementsByName("costumer-driver-license-number")[0].value = ''

        document.getElementsByName("costumer-driver-license-date")[0].required = false
        document.getElementsByName("costumer-driver-license-date")[0].value = ''
        return false

    }

    if (year - formDate[0] >= 18) {

        document.getElementById('license-field-id').style.display = 'flex'
        document.getElementById('license-field-id').style.visibility = 'visible'
        document.getElementById('license-field-id').style.backgroundColor = '#00ff0080'

        document.getElementsByName("costumer-driver-license-number")[0].required = true
        document.getElementsByName("costumer-driver-license-date")[0].required = true

        window.setTimeout(function () {
            document.getElementById('license-field-id').style.opacity = 1;
            document.getElementById('license-field-id').style.backgroundColor = 'transparent'
        }, 250);

    } else {

        document.getElementById('license-field-id').style.display = 'none'

        document.getElementsByName("costumer-driver-license-number")[0].required = false
        document.getElementsByName("costumer-driver-license-number")[0].value = ''

        document.getElementsByName("costumer-driver-license-date")[0].required = false
        document.getElementsByName("costumer-driver-license-date")[0].value = ''

    }

    if (year - formDate[0] < 18) {

        document.getElementById('constumer-sponsor-id').style.display = 'grid'
        document.getElementById('constumer-sponsor-id').style.visibility = 'visible'
        document.getElementById('constumer-sponsor-id').style.backgroundColor = '#00ff0080';

        window.setTimeout(function () {
            document.getElementById('constumer-sponsor-id').style.opacity = 1;
            document.getElementById('constumer-sponsor-id').style.backgroundColor = 'transparent';
        }, 250);

    } else {

        document.getElementById('constumer-sponsor-id').style.display = 'none'
        document.getElementById('constumer-sponsor-id').style.opacity = 0;

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