import { useState, useEffect } from 'react'
import { languages } from '../data/Languages'

function Languages() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5;

  // Create a circular array for smooth scrolling
  const getCircularArray = () => {
    const repeatedLanguages = [...languages, ...languages];
    return repeatedLanguages;
  };

  const handlePrevPage = () => {
    setStartIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? languages.length - 1 : newIndex;
    });
  };

  const handleNextPage = () => {
    setStartIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= languages.length ? 0 : newIndex;
    });
  };

  const getDisplayedLanguages = () => {
    const circularArray = getCircularArray();
    return circularArray.slice(startIndex, startIndex + itemsToShow);
  };

  return (
    <section className="languages-section">
      <h2>Languages</h2>
      <div className="list-container">
        <button id="prevPage" className="arrow-btn prev-btn" onClick={handlePrevPage}>&#10094;</button>
        <ul id="languageList" className="language-list">
          {getDisplayedLanguages().map((language, index) => (
            <li key={`${startIndex}-${index}`} className="language-item">
              <img src={language.image} alt={language.name} />
              <p>{language.name}</p>
            </li>
          ))}
        </ul>
        <button id="nextPage" className="arrow-btn next-btn" onClick={handleNextPage}>&#10095;</button>
      </div>
    </section>
  );
}

export default Languages;