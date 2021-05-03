'use stricit';
hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle =
{
    locationName: 'Seattle',
    minCust_H: 23,
    maxCust_H: 65,
    avgCookies_Cust: 6.3,
    Custph: [],
    Cookiesph: [],
    sumTotal: 0,
    getCust_H: function () {
        for (let i = 0; i < hours.length; i++) {
            min = Math.ceil(this.minCust_H, this.maxCust_H);
            max = Math.floor(this.maxCust_H);
            this.Custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H +1) + this.minCust_H));
        }

    },
    getCookies_H: function () {
        for (let i = 0; i < hours.length; i++) {
            this.Cookiesph.push (Math.ceil( this.Custph[i] * this.avgCookies_Cust));
            this.sumTotal+=this.Cookiesph[i];
        }
    },

    render: function () {
        let container=document.getElementById('test');
        let h2EL = document.createElement('h2');
        container.appendChild(h2EL);
        h2EL.textContent = Seattle.locationName;
        let ulEL = document.createElement('ul');
       container.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement('li');
            ulEL.appendChild(liEL);
            liEL.textContent = `${hours[i]}:${this.Cookiesph[i]} cookies`;
        }
        let LI2 = document.createElement('li');
        ulEL.appendChild(LI2);
       LI2.textContent = `Total: ${this.sumTotal} cookies`;

    }

}
Seattle.getCust_H();
Seattle.getCookies_H();
Seattle.render();

//  second part

let Tokyo =
{
    locationName: 'Tokyo',
       minCust_H: 3,
    maxCust_H: 24,
    avgCookies_Cust: 1.2,
    Custph: [],
    Cookiesph: [],
    getCust_H: function () {
        for (let i = 0; i < hours.length; i++) {
            min = Math.ceil(this.minCust_H, this.maxCust_H);
            max = Math.floor(this.maxCust_H);
            this.Custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H) + this.minCust_H));
        }

    },
    getCookies_H: function () {
        for (let i = 0; i < hours.length; i++) {
            this.Cookiesph.push (Math.ceil( this.Custph[i] * this.avgCookies_Cust));
            this.sumTotal+=this.Cookiesph[i];
        }
    },

    render: function () {
        let container=document.getElementById('test');
        let h2EL = document.createElement('h2');
        container.appendChild(h2EL);
        h2EL.textContent = Seattle.locationName;
        let ulEL = document.createElement('ul');
       container.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement('li');
            ulEL.appendChild(liEL);
            liEL.textContent = `${hours[i]}:${this.Cookiesph[i]} cookies`;
        }
        let LI2 = document.createElement('li');
        ulEL.appendChild(LI2);
       LI2.textContent = `Total: ${this.sumTotal} cookies`;

    }

}
Tokyo.getCust_H();
Tokyo.getCookies_H();
Tokyo.render();
// third location

let Dubai =
{
    locationName: 'Dubai',
    minCust_H: 11,
    maxCust_H: 38,
    avgCookies_Cust: 3.7,
    Custph: [],
    Cookiesph: [],
    getCust_H: function () {
        for (let i = 0; i < hours.length; i++) {
            min = Math.ceil(this.minCust_H, this.maxCust_H);
            max = Math.floor(this.maxCust_H);
            this.Custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H) + this.minCust_H));
        }

    },
    getCookies_H: function () {
        for (let i = 0; i < hours.length; i++) {
            this.Cookiesph.push (Math.ceil( this.Custph[i] * this.avgCookies_Cust));
            this.sumTotal+=this.Cookiesph[i];
        }
    },

    render: function () {
        let container=document.getElementById('test');
        let h2EL = document.createElement('h2');
        container.appendChild(h2EL);
        h2EL.textContent = Seattle.locationName;
        let ulEL = document.createElement('ul');
       container.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement('li');
            ulEL.appendChild(liEL);
            liEL.textContent = `${hours[i]}:${this.Cookiesph[i]} cookies`;
        }
        let LI2 = document.createElement('li');
        ulEL.appendChild(LI2);
       LI2.textContent = `Total: ${this.sumTotal} cookies`;

    }

}
Dubai.getCust_H();
Dubai.getCookies_H();
Dubai.render();


// fourth part

let Paris =
{
    locationName: 'Paris',
    minCust_H: 20,
    maxCust_H: 38,
    avgCookies_Cust: 2.3,
    Custph: [],
    Cookiesph: [],
    getCust_H: function () {
        for (let i = 0; i < hours.length; i++) {
            min = Math.ceil(this.minCust_H, this.maxCust_H);
            max = Math.floor(this.maxCust_H);
            this.Custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H) + this.minCust_H));
        }

    },
    getCookies_H: function () {
        for (let i = 0; i < hours.length; i++) {
            this.Cookiesph.push (Math.ceil( this.Custph[i] * this.avgCookies_Cust));
            this.sumTotal+=this.Cookiesph[i];
        }
    },

    render: function () {
        let container=document.getElementById('test');
        let h2EL = document.createElement('h2');
        container.appendChild(h2EL);
        h2EL.textContent = Seattle.locationName;
        let ulEL = document.createElement('ul');
       container.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement('li');
            ulEL.appendChild(liEL);
            liEL.textContent = `${hours[i]}:${this.Cookiesph[i]} cookies`;
        }
        let LI2 = document.createElement('li');
        ulEL.appendChild(LI2);
       LI2.textContent = `Total: ${this.sumTotal} cookies`;

    }

}
Paris.getCust_H();
Paris.getCookies_H();
Paris.render();

// fifth part 

let Lima =
{
    locationName: 'Lima',
    minCust_H: 2,
    maxCust_H: 16,
    avgCookies_Cust: 4.6,
    Custph: [],
    Cookiesph: [],
    getCust_H: function () {
        for (let i = 0; i < hours.length; i++) {
            min = Math.ceil(this.minCust_H, this.maxCust_H);
            max = Math.floor(this.maxCust_H);
            this.Custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H) + this.minCust_H));
        }

    },
    getCookies_H: function () {
        for (let i = 0; i < hours.length; i++) {
            this.Cookiesph.push (Math.ceil( this.Custph[i] * this.avgCookies_Cust));
            this.sumTotal+=this.Cookiesph[i];
        }
    },

    render: function () {
        let container=document.getElementById('test');
        let h2EL = document.createElement('h2');
        container.appendChild(h2EL);
        h2EL.textContent = Seattle.locationName;
        let ulEL = document.createElement('ul');
       container.appendChild(ulEL);
        for (let i = 0; i < hours.length; i++) {
            let liEL = document.createElement('li');
            ulEL.appendChild(liEL);
            liEL.textContent = `${hours[i]}:${this.Cookiesph[i]} cookies`;
        }
        let LI2 = document.createElement('li');
        ulEL.appendChild(LI2);
       LI2.textContent = `Total: ${this.sumTotal} cookies`;

    }

}
Lima.getCust_H();
Lima.getCookies_H();
Lima.render();
