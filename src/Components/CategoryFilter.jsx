import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToggle } from '../Hooks/useToggle';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories }) => {
  const navigate = useNavigate();
  const { category: currentCategory } = useParams();
  const [isOpen, toggleOpen] = useToggle(false);


  const handleCategoryChange = (category) => {
    navigate(`/category/${category}`);
    toggleOpen();
  };

  return (
    <div className={styles.categoryFilter}>
      {/* Desktop layout */}
      <div className={styles.desktopCategories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${category === currentCategory ? styles.active : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile layout */}
      <div className={styles.mobileMenu}>
        <button className={styles.burgerButton} onClick={toggleOpen}>
          ☰ Categories
        </button>
        {isOpen && (
          <div className={styles.dropdown}>
            {categories.map((category) => (
              <button
                key={category}
                className={styles.dropdownItem}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;