import React from 'react'
import Accordion from './components/Accordion';


// eslint-disable-next-line no-unused-vars
const data = [
  {
    "id": 1,
    "title": "Section 1",
    "content": "This is the content for Section 1. It can contain any type of information, including text, images, or other components."
  },
  {
    "id": 2,
    "title": "Section 2",
    "content": "This is the content for Section 2. You can provide additional details, explanations, or links here."
  },
  {
    "id": 3,
    "title": "Section 3",
    "content": "This is the content for Section 3. Feel free to include lists, tables, or any other relevant data."
  },
  {
    "id": 4,
    "title": "Section 4",
    "content": "This is the content for Section 4. You can customize this section as needed."
  }
];



const App = () => {
  return (
    <div>
      <Accordion data={data} />
    </div>
  )
}

export default App
