import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const [name, setName] = useState('Rahul');

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const handleClick = ()=> {
    //     setName('Umang');
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }
    

    return ( 
        <div className="home"> 
            {/* <p>{ name }</p> */}
            {/* <button onClick={handleClick}>Click Me</button> */}

            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}

            {/* example of reusable component */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'umang')} title="Umang blogs"></BlogList> */}
        </div>
     );
}
 
export default Home;