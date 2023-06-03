function calculateAgeInHoursMinutesSeconds(birthDate) {
    const now = new Date();
    const diff = now - birthDate;
                 // 2023-2000
                 // 23 years
    console.log(diff);
    const Years = Math.floor((diff / (1000 * 60 * 60))/(365*24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    return { Years,hours, minutes, seconds };
  }
  
  // Example usage
  const birthDate = new Date("2000-01-01");
  const age = calculateAgeInHoursMinutesSeconds(birthDate);
  
  console.log(age);
  