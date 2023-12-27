import { format } from "date-fns";

export default {
    name: "brand",
    type: "document",
    title: "Brand",
    fields: [
        {
            name: "brandName",
            type: "string",
            title: "Brand",
        },
        {
            name:"brandId",
            type:"string",
            title:"Brand Id"
        },
        {
          name:"countryId",
          type:"string",
          title:"Country Id"
        }
       
    ],
    preview: {
      select: {
        title: 'brandName',
      }
    }
  };