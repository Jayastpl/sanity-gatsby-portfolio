import { format } from "date-fns";
import { BsImage } from 'react-icons/bs'
//import { bannerIcon } from "./../../static/image-banner.svg"

export default {
  name: "imageBanner",
  type: "document",
  title: "Image Banner",
  icon: BsImage,
  fields: [
    {
        name: "bannerImages",
        type: "figure",
        title: "IMAGE",
        validation: Rule => Rule.custom(value => {
        
          if ( !value.asset) {
            return "Please Provide Banner Image" 
          }
          else{
            return true
          }
        
        })

      },
      {
        name: "bannerImageMobile",
        type: "figure",
        title: "OVERRIDE IMAGE FOR MOBILE (OPTIONAL)",
        description: "If left blank, default banner image will be used",
      },
      {
        name: "title",
        type: "string",
        title: "BANNER NAME",
        description: "Name is used to identify the banner for page layout",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title ? title+' : Image Banner' : 'Image Banner'}`
      }
    }
  }
};
