function getTempCallback(location, callback) {
  callback(undefined, 79);
  callback('City not found');
}

getTempCallback('Philadelphia', function(error, temp) {
  if(err) {
    console.log('error: ' + err);
  } else {
    console.log('success: ' + temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    resolve(79);
    reject('shit');
  });
}

getTempPromise('Philadelphia').then(function(temp) {
  console.log(temp)
}, function(err) {
  console.log(err);
});
