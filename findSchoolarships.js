var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.fastweb.com/college-scholarships')
  .wait(2000)
  //wait 2 seconds for page to fully load
  .evaluate(function gatherSchoolarships() {
    var awards = [];
    //create an array to hold all the awardsd aka schoolarships  we find by the below codoe
    $('.clearxxx').each(function getEachSchoolarship() {
      item = {}
      item['title'] = $(this).text()
      item['link'] = $(this).attr('href')
      awards.push(item)
    })
    return awards
  })
  .end()
  .then(function(result){
    for(awards in result){
      console.log(result[awards].title);
      console.log(result[awards].link);
      console.log('\n');
    }
  })
