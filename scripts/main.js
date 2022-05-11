
//
var networksForm = document.getElementById('networks-form');

networksForm.addEventListener('submit', function(event) {

  event.preventDefault(); //prevents form from autosubmitting
  var myText = document.getElementById('user-text').value;
  var mySelector1 = document.getElementById('select-network').value;
  var answer = document.getElementById('tarrif-text');

  if (myText < 1000 || myText > 10000000) {
    answer.innerHTML = "TZS";
    warning = "Not valid";
    results = 0;

  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'tigopesa') {
    results = 310
  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'mpesa') {
    results = 360
  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'airtelmoney') {
    results = 360
  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'halopesa') {
    results = 310
  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'eazypesa') {
    results = 385
  } else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'tpesa') {
    results = 360
  } else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'tigopesa') {
    results = 411
  }

  //From 2000 - 2999
  else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'mpesa') {
    results = 411
  } else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'airtelmoney') {
    results = 411
  } else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'halopesa') {
    results = 311
  } else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'eazypesa') {
    results = 386
  } else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'tpesa') {
    results = 361
  }

  // 3000 - 3999
  else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'tigopesa') {
    results = 619
  } else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'mpesa') {
    results = 619
  } else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'airtelmoney') {
    results = 619
  } else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'halopesa') {
    results = 419
  } else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'eazypesa') {
    results = 619
  } else if (myText >= 3000 && myText <= 3999 && mySelector1 === 'tpesa') {
    results = 469
  }

  // 4000 - 4999
  else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'tigopesa') {
    results = 689
  } else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'mpesa') {
    results = 689
  } else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'airtelmoney') {
    results = 689
  } else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'halopesa') {
    results = 539
  } else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'eazypesa') {
    results = 639
  } else if (myText >= 4000 && myText <= 4999 && mySelector1 === 'tpesa') {
    results = 489
  }

  //5000 - 6999
  else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'tigopesa') {
    results = 1020
  } else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'mpesa') {
    results = 1020
  } else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'airtelmoney') {
    results = 920
  } else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'halopesa') {
    results = 850
  } else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'eazypesa') {
    results = 870
  } else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'tpesa') {
    results = 770
  }

  // 7000 - 9999
  else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'tigopesa') {
    results = 1088
  } else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'mpesa') {
    results = 1088
  } else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'airtelmoney') {
    results = 988
  } else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'halopesa') {
    results = 868
  } else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'eazypesa') {
    results = 938
  } else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'tpesa') {
    results = 788
  }

  //10000 - 14999
  else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'tigopesa') {
    results = 1674
  } else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'mpesa') {
    results = 1674
  } else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'airtelmoney') {
    results = 1624
  } else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'halopesa') {
    results = 1424
  } else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'eazypesa') {
    results = 1574
  } else if (myText >= 10000 && myText <= 14999 && mySelector1 === 'tpesa') {
    results = 1324
  }

  //15000 - 19999
  else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'tigopesa') {
    results = 1877
  } else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'mpesa') {
    results = 1877
  } else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'airtelmoney') {
    results = 1827
  } else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'halopesa') {
    results = 1627
  } else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'eazypesa') {
    results = 1777
  } else if (myText >= 15000 && myText <= 19999 && mySelector1 === 'tpesa') {
    results = 1237
  }

  //20000 - 29999
  else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'tigopesa') {
    results = 2522
  } else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'mpesa') {
    results = 2522
  } else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'airtelmoney') {
    results = 2372
  } else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'halopesa') {
    results = 2172
  } else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'eazypesa') {
    results = 2372
  } else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'tpesa') {
    results = 2072
  }

  //30000 - 39999
  else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'tigopesa') {
    results = 2620
  } else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'mpesa') {
    results = 2620
  } else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'airtelmoney') {
    results = 2520
  } else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'halopesa') {
    results = 2370
  } else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'eazypesa') {
    results = 2470
  } else if (myText >= 30000 && myText <= 39999 && mySelector1 === 'tpesa') {
    results = 2220
  }

  //40000 - 49999
  else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'tigopesa') {
    results = 3400
  } else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'mpesa') {
    results = 3400
  } else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'airtelmoney') {
    results = 3350
  } else if (myText >= 30000 && myText <= 49999 && mySelector1 === 'halopesa') {
    results = 3150
  } else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'eazypesa') {
    results = 3350
  } else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'tpesa') {
    results = 2850
  }

  //50000 - 49999
  else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'tigopesa') {
    results = 4135
  } else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'mpesa') {
    results = 4135
  } else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'airtelmoney') {
    results = 4135
  } else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'halopesa') {
    results = 3935
  } else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'eazypesa') {
    results = 4035
  } else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'tpesa') {
    results = 3635
  }

  //100,000 - 199,999
  else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'tigopesa') {
    results = 5421
  } else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'mpesa') {
    results = 5421
  } else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'airtelmoney') {
    results = 5371
  } else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'halopesa') {
    results = 5071
  } else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'eazypesa') {
    results = 5371
  } else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'tpesa') {
    results = 5571
  }

  //200,000 - 299,999
  else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'tigopesa') {
    results = 7358
  } else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'mpesa') {
    results = 7358
  } else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'airtelmoney') {
    results = 7158
  } else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'halopesa') {
    results = 6558
  } else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'eazypesa') {
    results = 7058
  } else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'tpesa') {
    results = 6358
  }

  //300,000 - 399,999
  else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'tigopesa') {
    results = 8950
  } else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'mpesa') {
    results = 8950
  } else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'airtelmoney') {
    results = 8450
  } else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'halopesa') {
    results = 7950
  } else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'eazypesa') {
    results = 8450
  } else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'tpesa') {
    results = 7450
  }

  //400,000 - 499,999
  else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'tigopesa') {
    results = 9870
  } else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'mpesa') {
    results = 9870
  } else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'airtelmoney') {
    results = 9370
  } else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'halopesa') {
    results = 8870
  } else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'eazypesa') {
    results = 9370
  } else if (myText >= 400000 && myText <= 499999 && mySelector1 === 'tpesa') {
    results = 8370
  }

  //500,000 - 599,999
  else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'tigopesa') {
    results = 11140
  } else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'mpesa') {
    results = 11140
  } else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'airtelmoney') {
    results = 10640
  } else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'halopesa') {
    results = 10040
  } else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'eazypesa') {
    results = 10640
  } else if (myText >= 500000 && myText <= 599999 && mySelector1 === 'tpesa') {
    results = 9240
  }

  //600,000 - 699,999
  else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'tigopesa') {
    results = 12480
  } else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'mpesa') {
    results = 12480
  } else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'airtelmoney') {
    results = 11980
  } else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'halopesa') {
    results = 11480
  } else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'eazypesa') {
    results = 11980
  } else if (myText >= 600000 && myText <= 699999 && mySelector1 === 'tpesa') {
    results = 10780
  }

  //700,000 - 799,999
  else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'tigopesa') {
    results = 12970
  } else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'mpesa') {
    results = 12970
  } else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'airtelmoney') {
    results = 12470
  } else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'halopesa') {
    results = 11970
  } else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'eazypesa') {
    results = 12470
  } else if (myText >= 700000 && myText <= 799999 && mySelector1 === 'tpesa') {
    results = 11370
  }

  //800,000 - 899,999
  else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'tigopesa') {
    results = 13264
  } else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'mpesa') {
    results = 13264
  } else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'airtelmoney') {
    results = 13264
  } else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'halopesa') {
    results = 12764
  } else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'eazypesa') {
    results = 13624
  } else if (myText >= 800000 && myText <= 899999 && mySelector1 === 'tpesa') {
    results = 12264
  }

  //900,000 - 1000000
  else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'tigopesa') {
    results = 14230
  } else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'mpesa') {
    results = 14230
  } else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'airtelmoney') {
    results = 14230
  } else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'halopesa') {
    results = 13370
  } else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'eazypesa') {
    results = 14230
  } else if (myText >= 900000 && myText <= 1000000 && mySelector1 === 'tpesa') {
    results = 13230
  }

  //1000001 - 3000000
  else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'tigopesa') {
    results = 14580
  } else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'mpesa') {
    results = 14580
  } else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'airtelmoney') {
    results = 14580
  } else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'halopesa') {
    results = 14080
  } else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'eazypesa') {
    results = 14580
  } else if (myText >= 1000001 && myText <= 3000000 && mySelector1 === 'tpesa') {
    results = 14180
  }

  //3000001 - 10000000
  else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'tigopesa') {
    results = 17000
  } else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'mpesa') {
    results = 17000
  } else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'airtelmoney') {
    results = 16000
  } else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'halopesa') {
    results = 14500
  } else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'eazypesa') {
    results = 17000
  } else if (myText >= 3000001 && myText <= 10000000 && mySelector1 === 'tpesa') {
    results = 14000
  }


  results = Number(results).toLocaleString();
  answer.innerHTML = "Tshs: " + results;


});


// Bank Tariffs

var bankForm = document.getElementById('bank-form');

bankForm.addEventListener('submit', function(event) {

  event.preventDefault(); //prevents form from autosubmitting
  var myText = document.getElementById('bank-user-text').value;
  var mySelector1 = document.getElementById('select-bank').value;
  var answer = document.getElementById('bank-tarrif-text');

  if (myText < 1000 || myText > 10000000) {
    answer.innerHTML = "TZS";
    warning = "Not valid";
    results = 0;

  } 
  
  else if (myText >= 1000 && myText <= 4999 && mySelector1 === 'nmb') {
    results = 400;
  }

  else if (myText >= 5000 && myText <= 9999 && mySelector1 === 'nmb') {
    results = 700;
  }

  else if (myText >= 10000 && myText <= 19999 && mySelector1 === 'nmb') {
    results = 1200;
  }

  else if (myText >= 20000 && myText <= 39999 && mySelector1 === 'nmb') {
    results = 1500;
  }

  else if (myText >= 40000 && myText <= 49999 && mySelector1 === 'nmb') {
    results = 1800;
  }

  else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'nmb') {
    results = 2200;
  }

  else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'nmb') {
    results = 3500;
  }

  else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'nmb') {
    results = 4700;
  }

  else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'nmb') {
    results = 5800;
  }

  else if (myText >= 400000 && myText <= 599999 && mySelector1 === 'nmb') {
    results = 6300;
  }

  else if (myText >= 600000 && myText <= 799999 && mySelector1 === 'nmb') {
    results = 6500;
  }

   else if (myText >= 800000 && myText <= 999999 && mySelector1 === 'nmb') {
    results = 7000;
  }

   else if (myText >= 1000000 && myText <= 1999999 && mySelector1 === 'nmb') {
    results = 7200;
  }

   else if (myText >= 2000000 && myText <= 1999999 && mySelector1 === 'nmb') {
    results = 7500;
  }

  else if (myText >= 3000000 && myText <= 3999999 && mySelector1 === 'nmb') {
    results = 8000;
  }

   else if (myText >= 4000000 && myText <= 4999999 && mySelector1 === 'nmb') {
    results = 9500;
  }

   else if (myText >= 5000000 && myText <= 5999999 && mySelector1 === 'nmb') {
    results = 9800;
  }

   else if (myText >= 6000000 && myText <= 6999999 && mySelector1 === 'nmb') {
    results = 10700;
  }

   else if (myText >= 7000000 && myText <= 7999999 && mySelector1 === 'nmb') {
    results = 12600;
  }

   else if (myText >= 8000000 && myText <= 8999999 && mySelector1 === 'nmb') {
    results = 13900;
  }

   else if (myText >= 9000000 && myText <= 10000000 && mySelector1 === 'nmb') {
    results = 15000;
  }


  //CRDB

  else if (myText >= 1000 && myText <= 1999 && mySelector1 === 'crdb') {
    results = 300;
  }

  else if (myText >= 2000 && myText <= 2999 && mySelector1 === 'crdb') {
    results = 350;
  }

  else if (myText >= 3000 && myText <= 4999 && mySelector1 === 'crdb') {
    results = 400;
  }

  else if (myText >= 5000 && myText <= 6999 && mySelector1 === 'crdb') {
    results = 750;
  }

  else if (myText >= 7000 && myText <= 9999 && mySelector1 === 'crdb') {
    results = 800;
  }

   else if (myText >= 10000 && myText <= 19999 && mySelector1 === 'crdb') {
    results = 1350;
  }

  else if (myText >= 20000 && myText <= 29999 && mySelector1 === 'crdb') {
    results = 1650;
  }

   else if (myText >= 30000 && myText <= 49999 && mySelector1 === 'crdb') {
    results = 1800;
  }

   else if (myText >= 50000 && myText <= 99999 && mySelector1 === 'crdb') {
    results = 2550;
  }

  else if (myText >= 100000 && myText <= 199999 && mySelector1 === 'crdb') {
    results = 3500;
  }

   else if (myText >= 200000 && myText <= 299999 && mySelector1 === 'crdb') {
    results = 4900;
  }

   else if (myText >= 300000 && myText <= 399999 && mySelector1 === 'crdb') {
    results = 5900;
  }

  
   else if (myText >= 400000 && myText <= 599999 && mySelector1 === 'crdb') {
    results = 6500;
  }

  else if (myText >= 600000 && myText <= 999999 && mySelector1 === 'crdb') {
    results = 7000;
  }

  else if (myText >= 1000000 && myText <= 1999999 && mySelector1 === 'crdb') {
    results = 7500;
  }

  else if (myText >= 2000000 && myText <= 2999999 && mySelector1 === 'crdb') {
    results = 8000;
  }

   else if (myText >= 3000000 && myText <= 3999999 && mySelector1 === 'crdb') {
    results = 9000;
  }

  else if (myText >= 4000000 && myText <= 6000000 && mySelector1 === 'crdb') {
    results = 9900;
  }

   else if (myText >= 6000001 && myText <= 7999999 && mySelector1 === 'crdb') {
    results = 11000;
  }

  else if (myText >= 8000000 && myText <= 9999999 && mySelector1 === 'crdb') {
    results = 13000;
  }

  else if (myText >= 10000000 && myText <= 19999999 && mySelector1 === 'crdb') {
    results = 15000;
  }

  else if (myText >= 20000000 && myText <= 25000000 && mySelector1 === 'crdb') {
    results = 20000;
  }













  


  results = Number(results).toLocaleString();
  answer.innerHTML = "Tshs: " + results;


});


