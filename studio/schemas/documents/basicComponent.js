
import { format } from "date-fns";

export default {
    name: "basicComponent",
      type: "object",
     
      // validation: Rule => Rule.required(),
      groups: [
      
        { name: "headerSetting", title: "HEADER",default:true },
        { name: "footerSetting", title: "FOOTER" },
        { name: "styleSetting", title: "STYLING" },
      ],
    
      fields: [
        {
          name: "header",
          type: "header",
          title: "ADD HEADER DETAILS",
          group: "headerSetting",
      
        },
        {
          name: "footer",
          type: "footer",
          title: "ADD FOOTER DETAILS",
          group: "footerSetting",
       
        },
        {
          name: "styleFile",
          type: "file",
          title: "CSS",
          options: {
            accept: ".css",
            storeOriginalFilename: true,
          },
          description: "Upload css file from your computer",
          group: "styleSetting",
        },
        {
          name: "downloadFile",
          type: "string",
          title: "CLICK HERE",
          readOnly: true,
      
          group: "styleSetting",
          options:{
            downloadLink: "http://unilever.com"
          }
        },
      ]
};