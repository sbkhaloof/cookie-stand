'use stricit';
let container = document.getElementById('sealesProfile');
let tabelEL = document.createElement('table');
let forms=[];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let sealesLocationArry = [];
function sealesLocation(locationName, minCust_H, maxCust_H, avgCookies_Cust) {
    this.locationName = locationName;
    this.minCust_H = minCust_H;
    this.maxCust_H = maxCust_H;
    this.avgCookies_Cust = avgCookies_Cust;
    this.custph = [];
    this.Cookiesph = [];
    this.sumTotal = 0;
    sealesLocationArry.push(this);
}
sealesLocation.prototype.getCust_H = function () {
    for (let i = 0; i < hours.length; i++) {
        min = Math.ceil(this.minCust_H, this.maxCust_H);
        max = Math.floor(this.maxCust_H);
        this.custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H + 1) + this.minCust_H));
    }
}

sealesLocation.prototype.getCookies_H = function () {
    this.getCust_H();
    for (let i = 0; i < hours.length; i++) {

        this.Cookiesph.push(Math.ceil(this.custph[i] * this.avgCookies_Cust));
        this.sumTotal += this.Cookiesph[i];
    }
}

sealesLocation.prototype.render = function () {
    this.getCookies_H();

    container.appendChild(tabelEL);
    let tabelheaderEL = document.createElement('tr');
    let tablebody = document.createElement('tr');
    tabelEL.appendChild(tablebody);
    let tdEL0 = document.createElement('td');
    tablebody.appendChild(tdEL0);
    tdEL0.textContent = this.locationName;
    let suma = 0;
    for (let i = 0; i < hours.length; i++) {
        let tdEL = document.createElement('td');
        tablebody.appendChild(tdEL);
        tdEL.textContent = this.Cookiesph[i];
        suma += this.Cookiesph[i];
    }
    let tdEL15 = document.createElement('td');
    tablebody.appendChild(tdEL15);
    tdEL15.textContent = suma;
    
}
function header() {

    let tabelheaderEL = document.createElement('tr');
    tabelEL.appendChild(tabelheaderEL);
    let thEL0 = document.createElement('th')
    thEL0.textContent = '    ';
    tabelheaderEL.appendChild(thEL0);
    for (let i = 0; i < hours.length; i++) {
        let thEL = document.createElement('th');
        thEL.textContent = hours[i];
        tabelheaderEL.appendChild(thEL);
    }
    let thEL15 = document.createElement('th');
    thEL15.textContent = 'Daily Location Total';
    tabelheaderEL.appendChild(thEL15);
}

let salesform=document.getElementById('sales');
salesform.addEventListener("submit",submit);
function submit(event)
{
event.preventDefault();
let locationName=event.target.StoreName.value;
let minCust_H=event.target.MinimumOrder.value;
let maxCust_H=event.target.MaximumOrder.value;
let avgCookies_Cust=event.target.AvargeSales.value;
let newlocation= new sealesLocation(locationName,minCust_H,maxCust_H,avgCookies_Cust);
newlocation.getCookies_H();
newlocation.render();
// sealesLocationArry.push(this);
console.log(sealesLocationArry);
tablefooterEL.innerHTML='';
 footer();
}
let tablefooterEL = document.createElement('tr');
function footer()
 {
    
    tabelEL.appendChild(tablefooterEL);
    let thf = document.createElement('td');
    thf.textContent = 'totals';
    tablefooterEL.appendChild(thf);
    for (let i = 0; i < hours.length; i++) 
    {
        let total1=0;
        let tdf1 = document.createElement('td');
        tablefooterEL.appendChild(tdf1);
        for (let j=0;j<sealesLocationArry.length;j++)
        {
            total1 += sealesLocationArry[j].Cookiesph[i] ;
            tdf1.textContent=total1; 
        }
       
    }
    let tdf2=document.createElement('td');
    tablefooterEL.appendChild(tdf2);
    let sumx=0;
    for (let j=0;j<sealesLocationArry.length;j++)
{
    sumx=sumx+sealesLocationArry[j].sumTotal;
}
tdf2.textContent=sumx;}

header();
let Seattle = new sealesLocation('Seattle', 23, 65, 6.3);
Seattle.render();

let Tokyo = new sealesLocation('Tokyo', 3, 24, 1.2);
Tokyo.render();

let Dubai = new sealesLocation('Dubai', 11, 38, 3.7);
Dubai.render();

let Paris = new sealesLocation('Paris', 20, 38, 2.3);
Paris.render();

let lima = new sealesLocation('Lima', 2, 16, 4.6);
lima.render();


footer()