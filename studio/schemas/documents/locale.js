import { format } from "date-fns";

export default {
    name: "locale",
    type: "document",
    title: "Locale",
    fields: [
      {
        name: "localeName",
        type: "string",
        title: "Locale Name",
    },
        {
            name: "languageCode",
            type: "string",
            title: "Language Code",
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
        title: 'localeName',
      }
    }
  };