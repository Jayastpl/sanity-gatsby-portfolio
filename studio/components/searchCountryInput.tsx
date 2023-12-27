import React, { useState, useEffect } from 'react';
import {StringInputProps, set, unset} from 'sanity'
import {useFetch} from 'usehooks-ts'
import {Autocomplete, Card, Spinner, Text,Flex,Box} from '@sanity/ui'

const url = 'https://bin.cartwire.co/campaign/get_active_countries'
const cardProps = {shadow: 1, padding: 3, radius: 2}

export default function searchCountryInput(props: StringInputProps) {
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
    
   
  <Autocomplete  

   filterOption={(query, option) =>
     option.payload.country
      .toLowerCase()
      .indexOf(query.toLowerCase()) > -1
  }
    id="autocomplete-example"
    options={data.map(country => ({
      value: country,
      payload: {
        country: country.country,
        iso_country_code: country.iso_country_code,
        id: country.id
      }
    }))}
    onChange={handleChange}
   // onSelect={handelSelect}
    value={selectedCountry}
   
    padding={[3, 3, 4]}
    placeholder="Type to search …"
    openButton
    // custom option render function
    renderOption={(option) => (
      <Card as="button">
        <Flex align="center">
          <Box paddingLeft={3} paddingY={2}>
            
          </Box>
          <Box flex={1} padding={3}>
            <Text size={[2, 2, 3]}>
              {option.payload.country}
            </Text>
          </Box>
        </Flex>
      </Card>
    )}
    // custom value render function
    renderValue={(value, option) =>
      option?.payload.country || value
    }
    
  />

  )
}