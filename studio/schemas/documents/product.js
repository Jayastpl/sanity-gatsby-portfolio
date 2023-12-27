import { format } from "date-fns";

export default {
  name: "product",
  type: "document",
  title: "Products",
  fields: [
      {
        name: "table_header",
        type: "string",
        title: "table_header",
      },
      {
        name: "price_symbol_position",
        type: "string",
        title: "price_symbol",
      },
      {
        name: "buy_online_txt",
        type: "string",
        title: "buy_online_txt",
      },
      
      {
        name: "brand_name",
        type: "string",
        title: "brand_name",
      },
      {
        name: "widget_name",
        type: "string",
        title: "widget_name",
      },
     
      {
        name: "image_url",
        type: "string",
        title: "image_url",
      },
      
     
      {
        name: "product_ean",
        type: "string",
        title: "product_ean",
      },
      {
        name: "close_txt",
        type: "string",
        title: "close_txt",
      },
      {
        name: "at_shop_following_retailers_txt",
        type: "string",
        title: "at_shop_following_retailers_txt",
      },
      {
        name: "shop_alternatives_txt",
        type: "string",
        title: "shop_alternatives_txt",
      },
      {
        name: 'retailer',
        title: 'Retailer',
        type: 'array',
        of: [
            {
              type: 'reference',
              to: {
                type: 'retailer',
              },
            },
          ],
      },
  ]
};
