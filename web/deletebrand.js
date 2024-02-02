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
const query = '*[_type == "country"][0...10]';
async function  deleteBrand()
{  
  
client.fetch(query).then((brands) => {
    console.log(brands);
   
  })
// client
//   .delete({query: '*[_type == "brand"]', params: {type: 'brand'}})
//   .then(() => {
//     console.log('The document matching *[_type == "bike"][0] was deleted')
//   })
//   .catch((err) => {
//     console.error('Delete failed: ', err.message)
//   })
  }


     
     
  deleteBrand();