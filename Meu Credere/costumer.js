const DOM = {

    costumersContainer: document.querySelector('#datatable tbody'),

    addCostumer(costumer, index) {

        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(costumer, index);
        tr.dataset.index = index;
        DOM.costumersContainer.appendChild(tr);

    },

    innerHTMLTransaction(costumer, index) {

        const html = `
        <td>${costumer.name}</td>
        <td>${costumer.birthday}</td>
        <td>${costumer.state}</td>
        <td>${costumer.city}</td>
        
        <td>${costumer.driver_license_number}</td>
        <td>${costumer.driver_license_issued_at}</td>

        <td>${costumer.phone_1}</td>
        <td>${costumer.phone_2}</td>
        <td>${costumer.phone_3}</td>
        <td>${costumer.phone_4}</td>

        <td>${costumer.email_1}</td>
        <td>${costumer.email_2}</td>
        <td>${costumer.email_3}</td>

        <td>${costumer.sponsor_name}</td>
        <td>${costumer.sponsor_phone}</td>`;

        return html;
    },

    clearCostumers() {

        DOM.costumersContainer.innerHTML = "";

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

Costumers.all.forEach(DOM.addCostumer);