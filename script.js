async function bitty() {
  let brate = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((a) => a.json())
    .catch((e) => {
      console.log(e);
    });
  console.log(brate);
  document.getElementById("rattle").innerHTML = brate.bpi.USD.rate;
  document.getElementById("battle").innerHTML = brate.bpi.GBP.rate;
  document.getElementById("cattle").innerHTML = brate.bpi.EUR.rate;
}
// bitty();
