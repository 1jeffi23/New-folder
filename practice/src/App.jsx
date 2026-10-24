import { useState } from 'react';
import useLocalStorage from './custom_hooks/useLocalStorage';
import usePrevious from './custom_hooks/usePrevious';
import useWindoSize from './custom_hooks/useWindoSize';
import useMediaQuery from './custom_hooks/useMediaQuery';
import useDebounce from './custom_hooks/useDebounce';
import useThrottle from './custom_hooks/useThrottle';
import useDarkmode from './custom_hooks/useDarkmode';
import useFetch from './custom_hooks/useFetch';
import usePagination from './custom_hooks/usePagination';
import InfiniteScroolhook from './Components/InfiniteScroolhook';
import Dynamicform from './Components/dynamicfors';

const Mobile = () => {
  return (
    <>
      <h1>Mobile Screen</h1>
    </>
  )
}

const Desktop = () => {
  return (
    <>
      <h1>Desktop Screen </h1>
    </>
  )
}
const App = () => {
  const [count, setCount] = useLocalStorage("count", 0);
  const previous = usePrevious(count);
  const { width, height } = useWindoSize();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [search, setSearch] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedVal = useDebounce(search, delay);
  // const Debouncedval = useDebounce(search,500);
  const throttleVal = useThrottle(search, 1000)

  const [isDark, toggleTheme] = useDarkmode();

  const {data,loading,error} = useFetch('https://dummyjson.com/products');

  

  const {
  currentData,
  currentpage,
  totalPages,
  nextPage,
  prevPage,
  gotoPage,
} = usePagination(data?.products || [], 5);


  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  console.log(import.meta.env.VITE_FRONTEND_URL);



  return (
    <>
     {/* <div className=" bg-blue-500 dark:bg-red-500">
    <button onClick={toggleTheme}>
      Toggle
    </button>

    <h1>Hello World</h1>
 
  
      
      <p>
        count is{count}
        <br />
        <button type='button' className='bg-white outline-double p-2 m-2' onClick={() => { setCount(count + 1) }}>Increment</button>
        <br />
        previous value is {previous}
        <br />
        width and height is {width},{height}

      </p>
      {
        isMobile ?
          <Mobile /> : <Desktop />
      }

      <input
        className=' m-3  outline-double'
        placeholder='search'
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
      />
      <button className='m-3 p-2 outline-double' onClick={() => { setDelay(3000) }}>change dealy</button>
      <h4>Debounced value is {debouncedVal}</h4>
      <br />
      <h4>Throttled value is value is {throttleVal}</h4>
       </div>
       <br/>
      

      //for usefetch hook
         <div>
     {data?.products?.map((product) => {

  return <h3 key={product.id}>{product.title}</h3>;
})}
    </div> 

    {currentData.map((product) => (
  <div className='outline-dashed p-3 m-3' key={product.id}>
    <h3>{product.title}</h3>
    <p>${product.price}</p>
  </div>
))}
<button className='outline-dashed m-2 p-1' onClick={prevPage}>Previous</button>

<span className='m-2'>
  {currentpage} / {totalPages}
</span>

<button  className='outline-dashed m-2 p-1' onClick={nextPage}>Next</button> */}

      {/* <InfiniteScroolhook/> */}
      {/* <Dynamicform/> */}
      <h1>hello</h1>

    </>
  )


}
export default App;