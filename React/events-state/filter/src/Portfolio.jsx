import { useState } from 'react'

import Toolbar from './js/Toolbar';
import ProjectList from './js/ProjectList';

import { projects } from './data/data'

import './Portfolio.css'

function Portfolio() {

  // Созданние фильтров возможных категорий из представленных данных
  const categories = new Set();
  projects.forEach((v) => categories.add(v.category));
  const ALL_CATEGORIES = 'ALL';
  const filters = [
    ALL_CATEGORIES, 
    ...categories
  ];

  const [filter, setFilter] = useState(ALL_CATEGORIES);

  // Получение изображений, согласно заданного фильтра
  const getProjects = (filterName) => {
    const images = projects
      .filter((v) => (v.category === filterName) || (filterName === ALL_CATEGORIES))
      .map((v) => v.img);
    return images;
  }

  return (
    <>
      <Toolbar
        filters={filters}
        selected={filter}
        onSelectFilter={(filter) => setFilter(filter)}
      />
      <ProjectList 
        projects={getProjects(filter)}
      />
    </>
  )
}

export default Portfolio
