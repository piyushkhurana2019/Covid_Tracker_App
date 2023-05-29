
maptilersdk.config.apiKey = 'BmZiHJfuG5yUqu3dvelU';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: "outdoor-v2",
  // center: [16.62662018, 49.2125578], // starting position [lng, lat]
  zoom: 1, // starting zoom
  center:[0,20]
});


function updateMap()
{
    console.log("Updating the map with real time data")
    fetch('/data.json')
    .then(Response=>Response.json())
    .then(rsp=>{

        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude

            cases= element.infected;
            if(cases>255){
                color = "rgb(255,0,0)"
            }
            else{
                color=`rgb(${cases},0,0)`
            }
            
            // mark on the map
            const marker = new maptilersdk.Marker({
                color: color,
                draggable: false
              }).setLngLat([longitude,latitude])
              .addTo(map);
              
        });
    })
}
updateMap();
// let interval=20000;
// setInterval(updateMap,interval);

