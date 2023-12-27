// sanity.config.js
import {buildLegacyTheme, defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';
import { Logo } from './plugins/my-studio-logo/Logo';
import "./custom.css";
import {setPublishedAction} from "./schemas/setPublishedAction"
const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}
export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-blue'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
  
})

export default defineConfig({
  title: "blog",
  projectId: "lvva6ix8",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  }),
  "tab-asset-source",
  "asset-source-url",
],
  schema: {
    types: schemas,
  },
  document: {
    actions: (prev,context) =>{
   if(context.schemaType === 'campaign')
   {
    return  prev.map((originalAction) =>
      originalAction.action === 'publish' ? setPublishedAction : originalAction
   )
   }
   
  }
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  theme: myTheme,
  form: {
    components: {
      input: (props) => {
        if (Array.isArray(props.groups) && props.groups.length > 0) {
          if (props.groups[0].name === 'all-fields') {
            props.groups.shift()
          }
        }
        return props.renderDefault(props)
      },
    },
  },
});