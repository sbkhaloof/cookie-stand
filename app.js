'use stricit';
let Seattle =
{
    locationName: 'Seattle',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCust_H: 23,
    maxCust_H: 65,
    avgCookies_Cust: 6.3,
    Cust_H: [],
    Cookies_H: [],
    sumTotal:0,
    getCust_H: function (min, max) {
        let custph = [];
        for (let i = 0; i < this.hours.length; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            custph[i] = (Math.floor(Math.random() * (max - min + 1) + min));
        }
        return custph;
    },
    getCookies_H: function (Cust_H, avgCookies_Cust) {
        let cookiesph = [];
        for (let i = 0; i < this.hours.length; i++) {
            cookiesph.push(Cust_H[i] * avgCookies_Cust);
        }
        return cookiesph;
    },
    getsum:function(sumArr){
        let sumx = 0;
          for (let i = 0; i < sumArr.length; i++)
           {
            sumx=sumxx+sumArr[i];
          }
          return sumx;},
    render: function () {
        let divEl = document.getElementById('seattle');
        let articleEL = document.createElement('article');
        divEl.appendChild('articleEL')
        let h2EL = document.createElement('h2');
        h2EL.textContent = Seattle.locationName;
        articleEL.appendChild(h2EL);
        let pEL = document.createElement('p');
        pEL.textContent = `you are in ${Seattle.locationName}.here you can all data you need about this location`;
        articleEL.appendChild('pEL');
        let ulEL = document.createElement('ul');
        articleEL.appendChild('ulEL');
        for (let i = 0; i < this.hours.length; i++) {
            let liEL = document.createElement('li');
            liEL.textContent = this.hours[i] + ' :' + this.Cookies_H[i];
            ulEL.appendChild(liEL);
        }
        }
}
Seattle.getCust_H(Seattle.minCust_H, Seattle.maxCust_H);
console.log(Seattle.Cust_H);
Seattle.getCookies_H(Seattle.Cust_H, Seattle.avgCookies_Cust);
console.log(Seattle.Cookies_H);
Seattle.render();
Seattle.sumTotal=Seattle.getsum(Cookies_H);
console.log(Seattle.sumTotal);
//  Tokyo part

let Tokyo =
{
    locationName: 'Tokyo',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCust_H:3,
    maxCust_H:24,
    avgCookies_Cust: 1.2,
    Cust_H: [],
    Cookies_H: [],
    getCust_H: function (min, max) {
        let custph = [];
        for (let i = 0; i < this.hours.length; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            custph[i] = (Math.floor(Math.random() * (max - min + 1) + min));
        }
        return custph;
    },
    getCookies_H: function (Cust_H, avgCookies_Cust) {
        let cookiesph = [];
        for (let i = 0; i < this.hours.length; i++) {
            cookiesph.push(Cust_H[i] * avgCookies_Cust);
        }
        return cookiesph;
    },
    getsum:function(sumArr){
        let sumx = 0;
          for (let i = 0; i < sumArr.length; i++)
           {
            sumx=sumxx+sumArr[i];
          }
          return sumx;},
    render: function () {
        let divEl = document.getElementById('Tokyo');
        let articleEL = document.createElement('article');
        divEl.appendChild('articleEL')
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.locationName;
        articleEL.appendChild(h2EL);
        let pEL = document.createElement('p');
        pEL.textContent = `you are in ${Tokyo.locationName}.here you can all data you need about this location`;
        articleEL.appendChild('pEL');
        let ulEL = document.createElement('ul');
        articleEL.appendChild('ulEL');
        for (let i = 0; i < this.hours.length; i++) {
            let liEL = document.createElement('li');
            liEL.textContent = this.hours[i] + ' :' + this.Cookies_H[i];
            ulEL.appendChild(liEL);
        }
        let li2EL=document.createElement('li');
        li2EL.textContent=this.getsum(this.Cookies_H);
        ulEL.appendChild(li2EL);
       }
}
Tokyo.getCust_H(Tokyo.minCust_H, Tokyo.maxCust_H);
console.log(Tokyo.Cust_H);
Tokyo.getCookies_H(Tokyo.Cust_H, Tokyo.avgCookies_Cust);
console.log(Tokyo.Cookies_H);
Tokyo.render();
// third location

let Dubai =
{
    locationName: 'Dubai',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCust_H: 11,
    maxCust_H: 38,
    avgCookies_Cust: 3.7,
    Cust_H: [],
    Cookies_H: [],
    getCust_H: function (min, max) {
        let custph = [];
        for (let i = 0; i < this.hours.length; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            custph[i] = (Math.floor(Math.random() * (max - min + 1) + min));
        }
        return custph;
    },
    getCookies_H: function (Cust_H, avgCookies_Cust) {
        let cookiesph = [];
        for (let i = 0; i < this.hours.length; i++) {
            cookiesph.push(Cust_H[i] * avgCookies_Cust);
        }
        return cookiesph;
    },
    getsum:function(sumArr){
        let sumx = 0;
          for (let i = 0; i < sumArr.length; i++)
           {
            sumx=sumxx+sumArr[i];
          }
          return sumx;},
    render: function () {
        let divEl = document.getElementById('Dubai');
        let articleEL = document.createElement('article');
        divEl.appendChild('articleEL')
        let h2EL = document.createElement('h2');
        h2EL.textContent = Dubai.locationName;
        articleEL.appendChild(h2EL);
        let pEL = document.createElement('p');
        pEL.textContent = `you are in ${Dubai.locationName}.here you can all data you need about this location`;
        articleEL.appendChild('pEL');
        let ulEL = document.createElement('ul');
        articleEL.appendChild('ulEL');
        for (let i = 0; i < this.hours.length; i++) {
            let liEL = document.createElement('li');
            liEL.textContent = this.hours[i] + ' :' + this.Cookies_H[i];
            ulEL.appendChild(liEL);
        }
        let li2EL=document.createElement('li');
        li2EL.textContent=this.getsum(this.Cookies_H);
        ulEL.appendChild(li2EL);
        }
}
Dubai.getCust_H(Dubai.minCust_H, Dubai.maxCust_H);
console.log(Dubai.Cust_H);
Dubai.getCookies_H(Dubai.Cust_H, Dubai.avgCookies_Cust);
console.log(Dubai.Cookies_H);
Dubai.render();
// fourth part

let Paris =
{
    locationName: 'Paris',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCust_H: 20,
    maxCust_H: 38,
    avgCookies_Cust: 2.3,
    Cust_H: [],
    Cookies_H: [],
    getCust_H: function (min, max) {
        let custph = [];
        for (let i = 0; i < this.hours.length; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            custph[i] = (Math.floor(Math.random() * (max - min + 1) + min));
        }
        return custph;
    },
    getCookies_H: function (Cust_H, avgCookies_Cust) {
        let cookiesph = [];
        for (let i = 0; i < this.hours.length; i++) {
            cookiesph.push(Cust_H[i] * avgCookies_Cust);
        }
        return cookiesph;
    },
    getsum:function(sumArr){
        let sumx = 0;
          for (let i = 0; i < sumArr.length; i++)
           {
            sumx=sumxx+sumArr[i];
          }
          return sumx;},
    render: function () {
        let divEl = document.getElementById('Paris');
        let articleEL = document.createElement('article');
        divEl.appendChild('articleEL')
        let h2EL = document.createElement('h2');
        h2EL.textContent = Paris.locationName;
        articleEL.appendChild(h2EL);
        let pEL = document.createElement('p');
        pEL.textContent = `you are in ${Paris.locationName}.here you can all data you need about this location`;
        articleEL.appendChild('pEL');
        let ulEL = document.createElement('ul');
        articleEL.appendChild('ulEL');
        for (let i = 0; i < this.hours.length; i++) {
            let liEL = document.createElement('li');
            liEL.textContent = this.hours[i] + ' :' + this.Cookies_H[i];
            ulEL.appendChild(liEL);
        }
        let li2EL=document.createElement('li');
        li2EL.textContent=this.getsum(this.Cookies_H);
        ulEL.appendChild(li2EL);
        }
}
Paris.getCust_H(Paris.minCust_H, Paris.maxCust_H);
console.log(Paris.Cust_H);
Paris.getCookies_H(Paris.Cust_H, Paris.avgCookies_Cust);
console.log(Paris.Cookies_H);
Paris.render();
// fifth part 

let Lima =
{
    locationName: 'Lima',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCust_H: 2,
    maxCust_H: 16,
    avgCookies_Cust: 4.6,
    Cust_H: [],
    Cookies_H: [],
    getCust_H: function (min, max) {
        let custph = [];
        for (let i = 0; i < this.hours.length; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            custph[i] = (Math.floor(Math.random() * (max - min + 1) + min));
        }
        return custph;
    },
    getCookies_H: function (Cust_H, avgCookies_Cust) {
        let cookiesph = [];
        for (let i = 0; i < this.hours.length; i++) {
            cookiesph.push(Cust_H[i] * avgCookies_Cust);
        }
        return cookiesph;
    },
    getsum:function(sumArr){
        let sumx = 0;
          for (let i = 0; i < sumArr.length; i++)
           {
            sumx=sumxx+sumArr[i];
          }
          return sumx;},
    render: function () {
        let divEl = document.getElementById('Lima');
        let articleEL = document.createElement('article');
        divEl.appendChild('articleEL')
        let h2EL = document.createElement('h2');
        h2EL.textContent = Lima.locationName;
        articleEL.appendChild(h2EL);
        let pEL = document.createElement('p');
        pEL.textContent = `you are in ${Lima.locationName}.here you can all data you need about this location`;
        articleEL.appendChild('pEL');
        let ulEL = document.createElement('ul');
        articleEL.appendChild('ulEL');
        for (let i = 0; i < this.hours.length; i++) {
            let liEL = document.createElement('li');
            liEL.textContent = this.hours[i] + ' :' + this.Cookies_H[i];
            ulEL.appendChild(liEL);
        }
        let li2EL=document.createElement('li');
        li2EL.textContent=this.getsum(this.Cookies_H);
        ulEL.appendChild(li2EL);
        

    }
}
Lima.getCust_H(Lima.minCust_H, Lima.maxCust_H);
console.log(Lima.Cust_H);
Lima.getCookies_H(Lima.Cust_H, Lima.avgCookies_Cust);
console.log(Lima.Cookies_H);
Lima.render();
