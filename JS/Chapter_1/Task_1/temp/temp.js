import moment from moment;

//Data
let x = {
    slotInterval: 30,
    openTime: '21:00',
    closeTime: '05:00'
  };
  
  //Format the time
  let startTime = moment(x.openTime, "HH:mm");
  
  //Format the end time and the next day to it 
  let endTime = moment(x.closeTime, "HH:mm").add(1, 'days');
  
  //Times
  let allTimes = [];
  
  //Loop over the times - only pushes time with 30 minutes interval
  while (startTime < endTime) {
    //Push times
    allTimes.push(startTime.format("HH:mm")); 
    //Add interval of 30 minutes
    startTime.add(x.slotInterval, 'minutes');
  }
  
  console.log(allTimes);