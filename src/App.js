import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

function App() {

  //Category and news
  const [category, setCategory] = useState('');
  const [newsItems, setNews] = useState([])

  useEffect(()=>{
    const callAPI = async () =>{
      const URL = `http://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=f7f55895f6544b0ca6dc17b3b08b97c1`
      const response = await fetch(URL);
      const news = await response.json()
      
      setNews(news.articles)
    }
    callAPI()
  },[category])
  return (
    <>
      <Header
        title="Buscador de noticias"
      />
      <div className="container white">
        <Form
          setCategory={setCategory}
        />
        <NewsList
          newsItems={newsItems}
        />
      </div>
    </>
  );
}

export default App;
