import './LibraryPage.css';
import QuizList from './QuizList';

function LibraryPage() {
    return (
      <div className="library-page">
        <div className="library-container">
          <QuizList/>
        </div>
      </div>
    );
  };
  
  export default LibraryPage;