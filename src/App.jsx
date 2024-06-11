
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { getArticlesApi } from './api/articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';


function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const [error, setError]= useState(false)



  const handleSubmit = async (query) => {
    try {
      setLoading(true)
      setArticles([])
      const data = await getArticlesApi(query)
      setArticles(data)
      ;
   } catch (error) {
    setError(true)
   } finally {
      setLoading(false)
   }
  console.log("query:", query)
 }

  return (
    <>
      <SearchBar submit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery images={articles} />}
      
      {articles.length && <LoadMoreBtn />}
    </>
  )
}

export default App
