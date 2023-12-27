import React, { useState, useEffect } from 'react';
import {StringInputProps, set, unset} from 'sanity'
import {useFetch} from 'usehooks-ts'
import {Autocomplete, Card, Spinner, Text,Flex,Box,TextInput} from '@sanity/ui'

const url = 'https://stage-cartwire-bin.unileverqa.com/campaign/get_widget_details'
const cardProps = {shadow: 1, padding: 3, radius: 2}

export default function myCustomObject(props: StringInputProps) {
  // The onChange handler can write new changes to the field
  console.log(props);
  const {onChange, value,schemaType} = props
  const {data, error} = useFetch<any[]>(url)
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (value) => {
    setSelectedCountry(value.country);
    onChange((set({countryName:value.country,_type:props.schemaType.name,countryId:value.id, countryCode:value.iso_country_code})));
  
  };
  

  if (error)
    return (
      <Card tone="critical" {...cardProps}>
        <Text>There has been an error</Text>
      </Card>
    )

  if (!data)
    return (
      <Card tone="default" {...cardProps}>
        <Spinner />
      </Card>
    )
   
  return (
    
   
    <Card padding={4}>
    <label htmlFor="street-address">Street Address</label>
    <TextInput
      value={value}
      id="street-address"
    />
  </Card>

  )
}