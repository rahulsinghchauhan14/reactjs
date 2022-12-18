import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [name, setName] = useState('Rahul');

    const [blogs, setBlogs] = useState([
        {title: 'My first blog', body: '1 lorem ipsum...', author: 'rahul',id:1},
        {title: 'My second blog', body: '2 lorem ipsum...', author: 'rahul',id:2},
        {title: 'My third blog', body: '3 lorem ipsum...', author: 'umang',id:3},
        {title: 'My fourth blog', body: '4 lorem ipsum...', author: 'rahul',id:4}
    ]);

    //let name = 'Rahul';

    const handleClick = ()=> {
        setName('Umang');
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name }</p>
            <button onClick={handleClick}>Click Me</button>

            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> { /* example of props */}

            {/* example of reusable component */}

            <BlogList blogs={blogs.filter((blog) => blog.author === 'umang')} title="Umang blogs"></BlogList>
        </div>
     );
}
 
export default Home;