import { format } from "date-fns";
import { RiPlayListAddFill } from 'react-icons/ri'

export default {
  name: "navigationLinkList",
  type: "document",
  title: "Navigation Links",
  icon: RiPlayListAddFill,
  fields: [
    {
      name: "title",
      type: "string",
      title: "TITLE",
      description: "Provide Title Name"
    },
    {
      name: "headingLevel",
      type: "string",
      title: "TITLE HEADING LEVEL",
      description: "If left blank, defaults to H1. The page must have a H1, and subsequent heading must be H2",
      options: {
        list: [ 
          { title: 'H1', value: 'H1'},
          { title: 'H2', value: 'H2'},
          { title: 'H3', value: 'H3'},
          { title: 'H4', value: 'H4'},
          { title: 'H5', value: 'H5'},
          { title: 'H6', value: 'H6'},
        ]
      }
    },
	 {
      name: "subtitle",
      type: "string",
      title: "SUB TITLE",
      description: "Provide SubTitle Name"
    },
      {
        name: "navigtion",
        title: "Select Navigation Link",
        type: "array",
        of: [{type: "navigationLink"}],
        validation: Rule => Rule.required().min(1).error("Please Add Alteast One Navigation Link")
      }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Navigation Link'
      }
    }
  }
  
};