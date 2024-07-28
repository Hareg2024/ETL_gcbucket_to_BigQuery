function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.VendorID = values[0];
    obj.tpep_pickup_datetime = values[1];
    obj.tpep_dropoff_datetime = values[2];
    obj.passenger_count = values[3];
    obj.trip_distance = values[4];
    obj.RatecodeID = values[5];
    obj.payment_type = values[6];
    obj.fare_amounte = values[7];
    obj.tip_amount = values[8];
    obj.total_amount = values[9];
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }