const createYearsList = () => {
    const currentYear = new Date().getFullYear(); 
    const startYear = 1960; 
    const years = [];

    for (let i = currentYear; i >= startYear; i--) {
      years.push({ id: i, name: `${i}` });
  }
  return years
}

export default createYearsList