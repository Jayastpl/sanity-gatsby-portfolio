
import React from "react";
import productSearchInput from '../../components/productSearchInput';

export default {
  name: 'productReference',
  title: 'Add Product',
  type: 'object',

  validation: Rule => Rule.custom(fields => {
    if (fields.smartProductId==null) return "Please Add Correct Product"
    return true
  }),

  fields: [
    {
      title: 'ProductArray',
      name: 'productObject',
      type: 'object',
      components: {
        input: productSearchInput,
      },
      fields: [
        {
          // 5. Enable editors to input a string from a predefined list (social)
          name: 'productCode',
    
          title: 'PRODUCT GTIN/EAN/UPC',
    
          type: 'string',
          description: "Please enter the Product GTIN/EAN/UPC to check availability",
        },
       
        {
          name: "title",
          type: "string",
          title: "PRODUCT NAME",
         // readOnly:true,
          description: "You can't type here!",
        },
        {
          name: 'smartProductId',
          type: 'string',
          title: 'SMART PRODUCT ID',
         // readOnly:true,
          description: "You can't type here!",
        },
        {
            name: "productImage",
            type: "string",
            title: "PRODUCT IMAGE",
           // readOnly:true,
            description: "You can't type here!",
         
          },
      ]
    },

    {
      name: "overrideTitle",
      type: "string",
      title: "OVERRIDE PRODUCT NAME",
      description: "Use this field to override product name",
    },
 
      {
        name: "overrideImage",
        type: "figureOverride",
        title: "OVERRIDE PRODUCT IMAGE"
      }
  ],

  
  preview: {
    select: {

     productCode:'productCode',
     smartProductId:'smartProductId',
     title:'title',
     productImage:'productImage',
     overrideImage:'overrideImage'
    }
  }
}