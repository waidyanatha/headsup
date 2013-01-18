HeadsUpClient = new function() {

this.viewDrugCount = function(orderid) {
CoffeShopAppUtil.makeRequest("GET","/view/diseasecounts.jag"+orderid+"", null ,
function(html) {
$("#response-textarea").val('JSON.stringify(html');
$("#request-textarea").val(orderid);
});
}

}