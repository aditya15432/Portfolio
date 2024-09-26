const https=require("http");

const server=https.createServer(function(req, res){
    let dataObj={id:"123", name:"bvcjn"};
    let data=JSON.stringify(dataObj);
    res.end(data);
});

server.listen(6789, function(){ 
    console.log("hi");
})