

window.addEventListener("load",checkInternetConnection)

function checkInternetConnection(){
    const statusText=document.getElementById('statusText');
    const IPText=document.getElementById('IPText');
    const NetworkText=document.getElementById('NetworkText');

    statusText.textContent="Checking...";

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())
        .then((data)=>{
                IPText.textContent=data.ip;
                statusText.textContent='Connected'

                const connection=navigator.connection;

                const networkStrength=connection?connection.downlink='Mbps':'Unknown';
                NetworkText.textContent=networkStrength
        })
        .catch(()=>{
            statusText.textContent="Disconnected";
            IPText.textContent='-';
            NetworkText.textContent='-';

        })
    }
    else{
        statusText.textContent="Disconnected";
        IPText.textContent='-';
        NetworkText.textContent='-';
    }

}