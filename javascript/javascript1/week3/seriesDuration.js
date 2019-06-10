//Calculate how much time a series have taken as a percentage of an average lifespan of 80 years
//Global array of objects 
const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ];
  //intialize totalPercentage
  let totalPercentage = 0;
  //total hours in 80 years
  const totalHours = 8409600;
  //function returns total hours per series
  function getTotalHoursPerSeries(obj){
    const totalHoursPerSeries = obj.days*24 + obj.hours + (obj.minutes/60);
    return totalHoursPerSeries;
  }
  //function returns percentage of your life wasted on single series 
  function getPercentageOfMylifePerSeries(HoursPerSeries,totalHours){
    const percentageOfMylifePerSeries = (HoursPerSeries/totalHours)*100;
    return percentageOfMylifePerSeries;
  }
  //For loop for calculating the total percentage from each percentage of a series
  for(let i=0; i<seriesDurations.length;i++){
   percentage = getPercentageOfMylifePerSeries(getTotalHoursPerSeries(seriesDurations[i]),totalHours);
   totalPercentage += percentage;
   console.log(`${seriesDurations[i].title} took ${percentage}% of my life `);
  }
  console.log(`\n In total that is ${totalPercentage}% of my life `);