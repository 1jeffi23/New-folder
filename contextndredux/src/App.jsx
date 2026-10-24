import { useState } from 'react'
import ChildA from './Components/ChildA';
import CountProvider from './Context';
import Appredux from './Appredux';
import { Provider } from 'react-redux';
import {store} from './Redux/Store';


function App() {
   
    

  return (
    <>
    {/* // Provider for redux */}
   <Provider store={store}>
     <Appredux/>
   </Provider>
    <br/>
    <br/>
    <br/>
    {/* countProvider for ContextAPI */}
    <CountProvider>
         using ContextAPI 
        <ChildA />
    </CountProvider>
    
    </>
  )
}

export default App
