var Product = require ('../models/product');
var mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/bw_clip_so2_t.jpg?alt=media&token=c90e30e5-e2a1-4b8e-90a8-bf849aefaf7b",
        title:'BW SO2 Clip',
        description: 'The BW SO2 Clip is a reliable, maintenance-free single-gas detector. It is the most user-friendly and reliable way to keep you and your fellow workers safe!',
        price: 318.00
}),new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/bw_loneworker_connect1.jpg?alt=media&token=5c1fca73-80d9-4759-9364-79348cbba24c",
        title:'BW Loneworker',
        description: 'This single gas detectorgive you real-time wireless visibility on safety data to help you make safer and faster desicions.',
        price: 690.00
}),
    new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/bw_gas_alert_quattro_front_t.jpg?alt=media&token=e9ffea37-7561-4888-b035-ced688ecfe08",
        title:'BW Gas Alert Quattro Rechargeable',
        description: 'The Gas Alert Quatro four-gas detector is rugged and reliable. It has flexible power options and is always ready. Get yourself one today!',
        price: 605.00
    }),
    new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/bw_multi_microclip_xl_blk_t.jpg?alt=media&token=07b32c7e-66eb-4853-a171-c5ace499b769",
        title:'BW MicroClip XL',
        description: 'The MicroClip XL helps provide an affordable protection from atmospheric hazards. Its slim and compact design makes it easier to wear and allows workers to focus on the job at hand!',
        price: 360.00
    }),
    new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/honeywell_qrae3_pump_front_t.jpg?alt=media&token=edb409e1-bf48-4a29-925a-063ed2ad23e2",
        title:'RAE Systems QRAE 3 Pumped',
        description: 'The RAE Systems new QRAE 3 is a versatile, rugged, one-to-four sensor pumped gas monitor. It helps provide continuous exposre monitoring a variety of gases.',
        price: 695.00
    }),
    new Product({
        imagePath:"https://firebasestorage.googleapis.com/v0/b/shoppi-14d4e.appspot.com/o/toxirae_3_.jpg?alt=media&token=7bd2a4da-caeb-4211-80fc-734c565e4bf9",
        title:'RAE Systems ToxiRAE 3',
        description: 'This single gas monitor is a full-featured single-gas montior that offers unequaled cost of ownership value. The rugged steel housing is perfect for harsh environments. Get yourself one today!',
        price: 220.00
    })

];
var done =0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}