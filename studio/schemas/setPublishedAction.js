
import {useState, useEffect} from 'react';
import React from 'react'
import {useDocumentOperation,useValidationStatus} from 'sanity'
import sanityClient from "@sanity/client"
import { BsExclamationTriangle ,BsExclamationCircle} from "react-icons/bs"
//const configSetting = require("../../config");

// const _ = require("lodash");  
// const sanityClientConfig = {
//   projectId:'8gjfptsf',
//   dataset:  process.env.SANITY_STUDIO_API_DATASET || configSetting.sanity.dataset,
//   token: configSetting.sanity.token,
//   useCdn: true,
// }



export  function setPublishedAction(props) {
  console.log('campaing new data', props);
  var productid=[];
  var smartProductID=[];
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const {isValidating, markers} = useValidationStatus(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
 
  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])

  const onHandle = () => 
  {

    if(markers.length > 0 || !props.draft.content.hasOwnProperty('country') || !props.draft.content.hasOwnProperty('brand') || !props.draft.content.hasOwnProperty('locale')) 
    {
     
      setDialogOpen(true) 
    }
    else
    {  // This will update the button text 
      
      setIsPublishing(true)
     switch (props.type) {
       case 'campaign':
                      for(let x of props.draft.content.bodyComponent )
                      {
                        if(x._type=="productList")
                        {
                          for(let Y of x.product )
                        
                              {
                                productid.push(Y.productCode);
                                smartProductID.indexOf(Y.smartProductId) === -1 ? smartProductID.push(Y.smartProductId) :console.log("This item already exists");
                            
                            
                              }
                        }
                      }
          
       console.log("CustomPublish")
        
   break;

   default:
    /// Doing nothing? Consider deleting this switch statement to simplify your code.
   break;
      }

  
// Perform the publish
 publish.execute()
// Signal that the action is completed
// props.onComplete(triggerWebBuild())
props.onComplete()

    }
   
   
  }
  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    dialog: dialogOpen && {
      type: 'modal',
      onClose: () => setDialogOpen(false),
     
   
  
   },
    onHandle
 
  }
}