

export default {
  name: "codeEmbed",
  type: "document",
  title: "Code Embed Component",
 
  fields: [
    {
        name: 'codeEmbed',
        title: "HTML CODE",
        description: "Enter required code embed",
        validation: Rule => Rule.custom(val => {
          if (!val ) {
            return 'No HTML code added to HTML Embed component'
          }
         else{
           return true
         }
        }),
        type: 'code',
        options: {
            theme: 'solarizgithubed_dark',
            language: 'html',
        }
      },
      {
        name: "complianceCheck",
        type: "boolean",
        title: "I Accepts [COMPLIANCE CHECK]",
        validation: Rule => Rule.custom(val => {
          if (!val ) {
            return 'Please tick to confirm you have checked HTML code for Unilever compliance'
          }
         else{
           return true
         }
        }),
        initialValue: false,
          description: "Tick to confirm that you understand the risk of adding HTML to page, and the HTML meets all Unilever security, cookie, and accessibility guidlines",
          options: {
              layout: "checkbox"
          }
      },
      {
        name: "title",
        type: "string",
        title: "Component Name",
        description: "Name is used to identify the component for page layout",
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title ? title+' : Code Embed' : 'Code Embed'}`
      }
    }
  }
};
