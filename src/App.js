import './App.css';
import Book from './Book';
import {data} from './books';

function App() {
  return (
    <div className="booklist">
     {
       data.map((book, index) => {
         return <Book key={book.id} {...book} />
       })
     }
    </div>
  );
}

export default App;
