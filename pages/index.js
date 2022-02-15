import Head from 'next/head'
import { useEffect, useState } from 'react'
import Contents from '../components/Contents';
import Pagination from '../components/Pagination';
import axios from 'axios';


export default function Home() {
  //const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    const fetchContents = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPosts(res.data);
      setLoading(false);
    }
    fetchContents();
  }, []);
  //const preSubmitHandler = prepage => setCurrentPage(prepage);
  //const postSubmitHander = postpage => setCurrentPage(postpage);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirtsPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirtsPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postPerPage);
  if (loading) return <h1>Loading...</h1>
  return (
    <div>
      <Contents props={{ currentPosts }} />
      <Pagination pages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  )
};
