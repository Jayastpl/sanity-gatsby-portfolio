import { format } from "date-fns";

export default {
  name: "retailer",
  type: "document",
  title: "Retailer",
  fields: [
    {
        name: "prtId",
        type: "string",
        title: "prtId",
    
    },
    {
      name: "currency_symbol",
      type: "string",
      title: "currency_symbol",
  
  },
   
    {
        name: "is_available",
        type: "boolean",
        title: "is_available",
      },
      {
        name: "buy_now_url",
        type: "string",
        title: "buy_now_url",
      },
     
      {
        name: "is_app_enable",
        type: "boolean",
        title: "is_app_enable",
      },
      {
        name: "retailer_has_product_in_stock",
        type: "boolean",
        title: "retailer_has_product_in_stock",
      },
     
      {
        name: "price_period_format",
        type: "string",
        title: "price_period_format",
      },
      {
        name: "price_retailer_format",
        type: "string",
        title: "price_retailer_format",
      },
      {
        name: "multipack",
        type: "string",
        title: "multipack",
      },
      {
        name: "product_id",
        type: "string",
        title: "product_id",
      },
      {
        name: "retailer_id",
        type: "string",
        title: "retailer_id",
      },
      {
        name: "cw_offer",
        type: "string",
        title: "cw_offer",
      },
      
      {
        name: "retailer_name",
        type: "string",
        title: "retailer_name",
      },
      {
        name: "retailer_logo",
        type: "string",
        title: "retailer_logo",
      },
    
      {
        name: "stock_txt",
        type: "string",
        title: "stock_txt",
      },
      {
        name: "buy_now_text",
        type: "string",
        title: "buy_now_text",
      },
      {
        name: "campaign_buy_now",
      type: "string",
      title: "campaign_buy_now",

      }
  ]
  
 
  
};
