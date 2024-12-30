import './LibraryPage.css';
import Header from "../../components/Header";
import QuizList from './QuizList';

function LibraryPage() {
    return (
      <div className="library-page">
        <Header />
        <div className="library-container">
          <QuizList/>
        </div>
      </div>
    );
  };
  
  export default LibraryPage;