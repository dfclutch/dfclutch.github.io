# Static Site Template

A template to be cloned when creating new React sites. Includes dependencies shared across static site projects and cuts down time spent getting setup.

## Tech Stack: 
  - React
  - Styled components
  - react-router


# Structure:
  - My goal is to build a component tree that is as logically aligned with the UI view as possible
  - `/Pages` contains top-level `Page` components for ea
  - Given HTML's inherant tree organization, build components as follows ([] = optional):

    `/ComponentName`
      - `index.js`
      - `styles.js`
      - [`utils.js`]
      - [`test.js`]


## Cloning Template:

  1. Copy and past entire directory
  2. Ensure nodejs is installed and in your path, matching the version listed in `.nvmrc`
  3. run `npm install` to install dependencies
  4. run `npm run build` to run a production build of the project
  5. open `index.html` to view the output page
  7. run `npm run dev` for a quicker build and automatic rebuilding (requires refreshing browser to see changes)


