import { format } from "date-fns";
import { RiPlayListAddFill } from 'react-icons/ri'

export default {
  name: "productList",
  type: "document",
  title: "Product List",
  icon: RiPlayListAddFill,
  initialValue : () => ({
    columnView: 1,
    componentViewType: "list"
  }),
  fields: [
    {
      name: "heading",
      type: "string",
      title: "HEADING TEXT",
      description: "Provide product list heading"
    },
    {
      name: "headingLevel",
      type: "string",
      title: "HEADING LEVEL",
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
        name: "widgetType",
        type: "string",
        title: "WIDGET TYPE",
        description: "Defaults to Popup widget",
        options: {
          list: [ 
            { title: "Popup", value: "popup"},
            { title: "Inline", value: "inline"}
          ],
          layout : "radio",
          direction : "horizontal"
        }
      },
      {
        name: "displayPriceOnBIN",
        type: "boolean",
        title: "Show lowest price on BIN button",
        initialValue: true,
        description: "Default value is true to show lowest price from BIN button",
    },
      {
      name: "hidePriceOfferInWidget",
      type: "boolean",
      title: "Hide price and offer for the products",
      initialValue: false,
      description: "When switch on, it will hide price and offers available for a product at retailer website",
    },
    {
      name: "showHighlightProduct",
      type: "boolean",
      title: "Show Highlight Product",
      initialValue: false,
      description: "When switch on, it will show the highlight product",
    },
    {
      name: "componentViewType",
      type: "string",
      title: "COMPONENT VIEW TYPE",
      description: "Select the component render view type",
      options: {
        list: [ 
          { title: "List", value: "list"},
          { title: "Carousel", value: "carousel"}
        ],
        layout : "radio",
        direction : "horizontal"
      }
    },
      {
        name: "columnView",
        type: "number",
        title: "Mobile View",
        description: "Select one column to emphasize on rich packshots or Two columns for displaying more products on smaller screen",
        options: {
          list: [ 
            { title: "Single Column", value: 1},
            { title: "Two Column", value: 2}
          ],
          layout : "radio",
          direction : "horizontal"
        }
      },
      {
        name: "product",
        type: "product",
        title: "SELECT PRODUCT *",
        type: "array",
        of: [{type: "productReference"}],
        validation: Rule => Rule.required().min(1).error("Please Add Alteast One Product For ProductList")
      }
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title ? title+' : Product List' : 'Product List'}`
      }
    }
  }
};