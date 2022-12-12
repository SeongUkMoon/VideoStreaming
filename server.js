url = "https://f2ef24f7-0ee0-4-231-b9ee.documents.azure.com/dbs/Metadata/colls/items/docs/1"
url = "https://f2ef24f7-0ee0-4-231-b9ee.documents.azure.com:443/dbs/Metadata/colls/items/docs/1"
url = "https://f2ef24f7-0ee0-4-231-b9ee.documents.azure.com:443"

fetch(url).then(function(response){
    return response.json();
}).then(function(myJson){
    console.log(JSON.stringify(myJson));
});
