

import { format } from "date-fns";
import searchCountryInput from "../../components/searchCountryInput";
export default {
    name: "content",
    type: "object",
    title:"abc",
    groups: [
        { name: "CampaignDetails", title: "Campaign Details" , default: true },
        { name: "AnalyticsDetails", title: "Analytics Details"},
        { name: "StyleDetails", title: "Header, Footer & Styling"},
        { name: "CampaignContent", title: "Content" },
        { name: "publishDetail", title: "Publish"},
      ],

       fields: [
        {
          name: "country",
          type: "reference",
          title: "COUNTRY *",
          to: [{ type: 'country' }],
         // weak: true,
          group: "CampaignDetails",
          // components: {
          //   input: searchCountryInput
          // }
        
         
        },
        {
          name: "brand",
          type: "reference",
          title: "BRAND *",
          to: [{ type: 'brand' }],
          group: "CampaignDetails",
        // hidden: ({content}) => !content?.country
         hidden: ({ parent, value }) => !parent?.country,
        
         
          options: {
            filter: ({parent}) => {
             console.log(parent.country._ref);
            
              return {
                filter: 'countryId == $countryId',
                params: {countryId: parent.country._ref.split('-')[2]}
              }
            }
          
          }
        },
        
        {
          name: "locale",
          type: "reference",
          title: "Locale *",
          to: [{ type: 'locale' }],
          group: "CampaignDetails",
          
       
        },
        {
          name: "title",
          type: "string",
          title: "CAMPAIGN TITLE",
          description: "What is name of your campaign",
        
          group: "CampaignDetails",
        validation: Rule => Rule.required().error("Please Provide Campaign Name")
        },
        {
          name: "rootUrl",
          type: "string",
          title: "HOME PAGE OR CAMPAIGN ROOT URL",
          description: "Provide the url of brand website",
          group: "CampaignDetails",
        },        
        {
          name: "hideOutOfStockRetailers",
          type: "boolean",
          title: "Hide Out of Stock Retailers",
          initialValue: false,
          description: "it is applicable for Bin only",
          group: "CampaignDetails",
        },
        {
          name: "gaID",
          type: "string",
          title: "GOOGLE ANALYTICS ID",
          group: "AnalyticsDetails",
        },
      {
          name: "reportSuiteID",
          type: "string",
          title: "ADOBE ANALYTICS REPORT SUITES ID",
          group: "AnalyticsDetails",
        },
        
        {
          name: "style",
          type: "basicComponent",
          title: "Configure Header/Footer of the page",
          group: "StyleDetails",
        },
      {
        name: "bodyComponent",
        type: "array",
        title: "CREATE/ORDER BODY COMPONENT FOR PAGE",
        group: "CampaignContent",
        validation: Rule => Rule.required().min(1).error("Please Add Alteast One Component For Page"),
        of: [
          {type: "imageBanner"},
          {type: "imageCarousel"},
          {type: "productList"},
          { type: "textComponent" },
       //   { type: "codeEmbed" },
          { type: "videoComponent" },
          { type: "socialChannel" },
          {type: "navigationLinkList"},
        ],
      },
      {
        name: "slug",
        type: "slug",
        title: "CAMPAIGN URL *",
        description:"This will be the url of campaign page",
        options: {
          source: "content.title",
          maxLength: 96,
        },
        group: "publishDetail",
      validation: Rule => Rule.required().error("Please Provide Unique Campaign URL")
   
   
      },
      {
        name: "publishedAt",
        type: "datetime",
        title: "PUBLISH AT *",
        description: "This can be used to schedule post for publishing",
        group: "publishDetail",
            validation: Rule => Rule.custom(value => {
           
            if ( !value) {
              return "Please Provide Publish Date" 
            }
            else{
              return true
            }
          
          })
      },

    ]
  };