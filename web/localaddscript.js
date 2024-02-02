const sanityClient = require('@sanity/client');
const _ = require("lodash");
const url = 'https://stage-cartwire-bin.unileverqa.com/campaign/get_active_brands/'
const fetch = require("node-fetch");
const client = sanityClient
(
  {
    projectId:'8gjfptsf',
  dataset: 'prodv3',
  token: 'skOkVpe8kbGoTnmXhx9ixYSLpb8AVnw28vyfEo9xY7kwKznsVvQu5tpBDI5dcCriShFDT9ude0fXBhFiQS1MTVs4pqlz1alRNEzJmpChUY9bXWQCu1IG0r7OeNm80qfhgWWU443JWnbPZYgGNzex1xPGkJaIOvVkMxzh4NhglWwWp5cllo4G',
  useCdn: true,
  }
)
const query = '*[_type == "country"][60...72]';
async function  addBrand()
{  
  client.fetch(query).then((countrydata) => {
  //console.log(countrydata);
          countrydata.forEach(detail => {
                              fetch(url+detail.countryName)
                              .then(response => response.json())
                               .then(async (data) => {
                                console.log(Array.isArray(data));
                               if(Array.isArray(data))
                               { 
                                 //console.log(data);
                                var responseData= await addlocaleAction( data) ;
                                // console.log('responseData of addBrandAction', responseData);
                                     let transaction = client.transaction();
                                      responseData.forEach(document => {
                                   document.forEach(doc=>
                                    {
                                        transaction.createOrReplace(doc);
                                    }
                                   );
                                    
                                       
                                     });
                                        transaction.commit()
                                  
                               }
                               else{
                                 console.log("lengtg 0");
                               }
                               
                                  })
                                   .catch(error => {
                                        console.error('There was an error!', error);
                                    });
      
    })
  })
    
    // fetch(url)

    // .then(response => response.json())
    // .then(async (data) => {
    //  // console.log('response of brand_details--', data);
      
    //  var responseData= await addBrandAction( data) ;
    //  //console.log('responseData of addBrandAction', responseData);
    //     let transaction = client.transaction();
    //     responseData.forEach(document => {
      
    //     transaction.createOrReplace(document);
          
    //     });
    //       transaction.commit()
    //    })
    //     .catch(error => {
    //          console.error('There was an error!', error);
    //      });
   
  }


  async function addlocaleAction(props) 
  {
    
    
    let  localMainData = (props).map(transformLocale);
    return  localMainData;

    function  transformLocale(localeArray)
    {
      var localtrans=[];	
                if(localeArray.locale.length>0)
              {
                localeArray.locale.forEach(lo => {
                  let localedata =  
                  {
                      _id:`imported-locale-${lo.split("-")[0]}-${localeArray.brandId}-${localeArray.countryId}`,
                      _type: 'locale',
                      brandName:localeArray.brand,
                      countryId:localeArray.countryId,
                      brandId:localeArray.brandId,
                      localeName:lo,
                      languageCode:lo.split("-")[0]
                      
                }	
                
                localtrans.push(localedata);
                })
              }
             return localtrans
    }
  }	
     
  addBrand();