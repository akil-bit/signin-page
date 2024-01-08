import { UseState ,useEffect} from 'react';
import LoginRegister from './Components/LoginRegister';
import useFetch from './UseFetch';
const Home=() =>{
    const {data:blogs,isPending,error}=useFetch('http://localhost:5173/')
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
  
}