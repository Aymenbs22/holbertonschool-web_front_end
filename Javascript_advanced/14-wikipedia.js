function createElement(data){
    const paragraph = document.createElement("p");
    paragraph.innerText = data;
    document.body.appendChild(paragraph);
};

function queryWikipedia(callback){
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  const req = new XMLHttpRequest();
    req.onload = function() {
        if (req.status === 200) {
          const response = JSON.parse(req.responseText);
            callback(response.extract);
        }
      };

      req.open('GET', url);
      req.send();  
};