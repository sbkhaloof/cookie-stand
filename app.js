'use stricit';
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
sealesLocation.prototype.getCust_H = function ()
 {
    for (let i = 0; i < hours.length; i++)
     {
        min = Math.ceil(this.minCust_H, this.maxCust_H);
        max = Math.floor(this.maxCust_H);
        this.custph.push(Math.floor(Math.random() * (this.maxCust_H - this.minCust_H + 1) + this.minCust_H));
    }
}

sealesLocation.prototype.getCookies_H = function () 
{
    this.getCust_H();
    for (let i = 0; i < hours.length; i++) {

        this.Cookiesph.push(Math.ceil(this.custph[i] * this.avgCookies_Cust));
        this.sumTotal += this.Cookiesph[i];
    }
}
sealesLocation.prototype.render = function () {
    this.getCookies_H();
    let container = document.getElementById('sealesProfile');
     let h2EL = document.createElement('h2');
     container.appendChild(h2EL);
     h2EL.textContent = "Salmon Cookies_seales";
    let tabelEL = document.createElement('table');
    container.appendChild(tabelEL);
    let tabelheaderEL = document.createElement('tr')
    // table header 
    tabelEL.appendChild(tabelheaderEL);
    let thEL0 = document.createElement('th')
    thEL0.textContent='    ';
    tabelheaderEL.appendChild(thEL0);
    for(let i=0;i<hours.length;i++)
    {
    let thEL = document.createElement('th')
    thEL.textContent = hours[i];
    tabelheaderEL.appendChild(thEL);
    }
    
    let thEL15 = document.createElement('th');
    thEL15.textContent = 'Daily Location Total';
    tabelheaderEL.appendChild(thEL15);
     let tablebody=document.createElement('tr');// table body 
    tabelEL.appendChild(tablebody);
    let tdEL0=document.createElement('td');
    tablebody.appendChild(tdEL0);
    tdEL0.textContent=this.locationName;
    let suma=0;
    for (let i=0;i<hours.length;i++)
    {
        let tdEL=document.createElement('td');
        tablebody.appendChild(tdEL);
        tdEL.textContent=this.Cookiesph[i];
        suma=this.Cookiesph[i];
    }
let tdEL15=document.createElement('td');
tablebody.appendChild(tdEL15);
tdEL15.textContent='totals';
let tdEL16=document.createElement('td');
tablebody.appendChild(tdEL16);

    // let sumc=[];
    // for (let i=0;i<hours.length;i++)
    // {
    //     let tdEL16=document.createElement('td');
    //     tablebody.appendChild(tdEL16);
    //     tdEL16.textContent=this.Cookiesph[i];
    //     sumc[i]+=this.Cookiesph[i];
    // }
    // let tdEL15=document.createElement('td');
    // tablebody.appendChild(tdEL15);
    // tdEL15.textContent=suma;
    
    // let total=[];
    // for (let i=0;i<hours.length;i++)
    // {
    //     let tdf=document.createElement('td');
    //     tablebody.appendChild(tdf);
    //     total[i]+=Seattle.Cookiesph[i]+Tokyo.Cookiesph[i]+Dubai.Cookiesph[i]+Paris.Cookiesph[i]+lima.Cookiesph[i];
    //     tdf.textContent=total[i];
       
    // }
    // let tdEL17=document.createElement('td');
    // tablebody.appendChild(tdEL17);
    // let totalofdailytotal=0;
    // for(let i=0;i<sumc.length;i++)
    // {
    //     totalofdailytotal+=sumc[i];
    // }
    // tdEL17.textContent=totalofdailytotal;
    // let td2=document.createElement('td');
    // tablebody.appendChild(td2);
    // td2.textContent=this.getCookies_H[0];
}
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
