import {Card, Flex, Grid, Text} from '@sanity/ui'
import {FieldMember, MemberField, ObjectInputProps, InputProps, StringInputProps} from 'sanity'
import React, { useState, useEffect } from 'react';
const url = 'https://stage-cartwire-bin.unileverqa.com/campaign/get_widget_details'
import {useFormValue} from 'sanity'
export interface MediaTip {
  mediaType: string
  mediaTitle: string
}

// Extend the `ObjectInputProps` type
export type MediaTipInputProps = ObjectInputProps<MediaTip>

export default function productSearchInput(props: MediaTipInputProps) {
  const {value, members, renderField, renderInput, renderItem,renderPreview} = props
console.log(props);
const title = useFormValue([`title`])
  // find "mediaTitle" member
  const productCodeMember = members.find(
    (member): member is FieldMember => member.kind === 'field' && member.name === 'productCode'
  )
  // find "mediaTitle" member
  const productTitleMember = members.find(
    (member): member is FieldMember => member.kind === 'field' && member.name === 'title'
  )
  // find "mediaType" member
  const smartProductIdMember = members.find(
    (member): member is FieldMember => member.kind === 'field' && member.name === 'smartProductId'
  )
 // find "mediaType" member
 const productImageMember = members.find(
  (member): member is FieldMember => member.kind === 'field' && member.name === 'productImage'
)
  return (
  
      <Grid row={3} gap={3}>
       
                  {productCodeMember && (
                    <MemberField
                      member={productCodeMember}
                      renderPreview={renderPreview}
                      renderInput={renderInput}
                      renderField={renderField}
                      renderItem={renderItem}
                    />
                  )}
                    {productTitleMember && (
                    <MemberField
                      member={productTitleMember}
                      renderPreview={renderPreview}
                      renderInput={renderInput}
                      renderField={renderField}
                      renderItem={renderItem}
                    />
                  )}
                    {smartProductIdMember && (
                      <MemberField
                        member={smartProductIdMember}
                        renderPreview={renderPreview}
                        renderInput={renderInput}
                        renderField={renderField}
                        renderItem={renderItem}
                      />
                    )}
                      {productImageMember && (
                        <MemberField
                          member={productImageMember}
                          renderPreview={renderPreview}
                          renderInput={renderInput}
                          renderField={renderField}
                          renderItem={renderItem}
                        />
                      )}
   
      </Grid>
 
  )
}