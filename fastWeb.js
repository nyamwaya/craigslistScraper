var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.fastweb.com/login')
  //wait two seconds; consider waiting for the css selectors
  //.wait(2000)

  //click on the username form
  .click('input#login')
  //fill out the username with email adress
  .type('input#login', 'alecksonnyamwaya@gmail.com')

  //select password field
  .click('input#password')
  //type the given password into the field
  .type('input#password', 'elephant21')

  //select "remember_me" so we dont have to fill it out again//perhaps this is a mistake
  .click('input#remember_me')
  //submit the form so we can log in
  .click('input#user_form_submit')


    //wait 4 seconds fofr the website to load
  .wait(4000)

  //.click('span#number_awards')

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
