var list = [8213,37859,5005,10620,41104,6793];

async function getResponse(){
    var response = await fetch('../data.json');
    var content = await response.json();
    console.log(content);
}

getResponse()