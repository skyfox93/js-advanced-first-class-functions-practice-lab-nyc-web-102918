// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){console.log(driver.name);})
}

function logDriversByHometown(drivers,location){
  const selected=drivers.filter(function(driver){
    return driver.hometown===location
  });
  selected.forEach(function(driver){
    console.log(driver.name);
  })
}
function driversByRevenue(drivers){
  driversNew=[...drivers]
return driversNew.sort(function(a,b){return a.revenue - b.revenue});
}
function driversByName(drivers){
  driversNew=[...drivers]
return driversNew.sort(function(a,b){return a.name.localeCompare(b.name);});
}
function totalRevenue(drivers){
  function reducer (acc, driver){
    return acc+=driver.revenue;
    }
    return drivers.reduce(reducer,0);
  }
  function averageRevenue(drivers){
  return (totalRevenue(drivers)/drivers.length)
  }
