import { format } from "date-fns";
import { BsImage } from 'react-icons/bs'
//import { bannerIcon } from "./../../static/image-banner.svg"

export default {
  name: "navigationLink",
  type: "object",
  title: "Navigation Link",
  icon: BsImage,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Navigation Link Title",
      description: "Navigation Link Title",
    },
    {
      name: "linkId",
      type: "string",
      title: "Navigation Link Component Id",
      description: "Navigation Link Component Id",
  },
    {
        name: "linkImages",
        type: "figure",
        title: "Select Image for Navigation Link (Optional)"

      }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title ? title+' : Navigation Link' : 'Navigation Link'}`
      }
    }
  }
};
