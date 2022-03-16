// your code here:

function getAPI() {
    var request = new XMLHttpRequest(); 
    request.open("GET", "https://static.ngnrs.io/test/prices", true);
    request.onload = function ()
    {
        if (this.status >= 200 && this.status < 400)
        {
            // Success!
            var data = JSON.parse(this.response);
            console.log(data.data.prices);
            show(data.data);
            return data.data.prices;
        } else {
            // We reached our target server, but it returned an error.
            console.log("Error status not between 200 and 400.");
        }
    };
    request.send();
};
const getPrices = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve (getAPI());
    }, 1500);
});

function show(data) {
    let tab = 
        `<tr>
        <th>ID</th>
        <th>Pair</th>
        <th>Buy</th>
        <th>Sell</th>
       </tr>`;
    
    // Loop to access all rows 
    for (let item of data.prices) {
        tab += `<tr> 
    <td>${item.id} </td>
    <td>${item.pair}</td>
    <td>${item.buy}</td> 
    <td>${item.sell}</td>          
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("test").innerHTML = tab;
}