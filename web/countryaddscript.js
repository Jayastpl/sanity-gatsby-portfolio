const sanityClient = require('@sanity/client');
const _ = require("lodash");
const url = 'https://stage-cartwire-bin.unileverqa.com/campaign/get_active_countries'
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

async function  addCountry()
{  
    
    fetch(url)

    .then(response => response.json())
    .then(async (data) => {
      console.log('response of country_details--', data);
      
     var responseData= await addCountryAction( data) ;
     console.log('responseData of addCountryAction', responseData);
        let transaction = client.transaction();
        responseData.forEach(document => {
      
        transaction.createOrReplace(document);
          
        });
          transaction.commit()
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
   // console.log(countryArray);

   //return countrydata;
  }


   async function addCountryAction(props) 
  {
    
    
    let countryMainData = (props).map(transformCountry);
    return  countryMainData;
    function  transformCountry(countryArray)
    {
      
        const countrydata =  
        {
            _id:`imported-country-${countryArray.id}`,
            _type: 'country',
            countryName:countryArray.country,
            countryCode:countryArray.iso_country_code,
            countryId:countryArray.id
             
       }		
      return countrydata
    }
  
     
}     
  addCountry();