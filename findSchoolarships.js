var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.fastweb.com/login')
  .wait(2000)
  //wait 2 seconds for page to fully load

//.click('input#login')
  //fill out the username with email adress
  .type('input#login', 'alecksonnyamwaya@gmail.com')

  //select password field
//  .click('input#password')
  //type the given password into the field
  .type('input#password', 'elephant21')

  //submit the form so we can log in
.click('input#user_form_submit')


.wait(4000)
.click('span#number_awards')



//wait 2 seconds before we start scraping
  .wait(2000)
  .evaluate(function gatherSchoolarships() {
    var fastwebSchoolarships = [];
    //create an array to hold all the awardsd aka schoolarships  we find by the below codoe
    $('.clearxxx').each(function getEachSchoolarship() {
      item = {}
      item['title'] = $(this).find('a').text();
      item['link'] = $(this).find('a').attr('href');
      item['award_size'] = $(this).find('.award').text()
      item['deadline'] = $(this).find('.deadline').text()
      fastwebSchoolarships.push(item)
    })
    return fastwebSchoolarships
  })
  .end()
  .then(function(result){
    for(fastwebSchoolarships in result){
      console.log(result[fastwebSchoolarships].title);
      console.log(result[fastwebSchoolarships].link);
      console.log(result[fastwebSchoolarships].award_size);
      console.log(result[fastwebSchoolarships].deadline);

      console.log('\n');
    }
  })
