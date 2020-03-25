const mongoose = require("mongoose");
const db = require("./models");
const DB_URI = "mongodb://localhost:27017/doughnit";

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


const newDonutStore = [
    {
        place_id: "",
        name: "Sunshine Cafe",
        formatted_address: "100 Bush St, San Francisco, CA 94104",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://images.happycow.net/venues/1024/18/75/hcmp187552_868502.jpeg",
        },
        rating: 4.2,
        hours: "7:00am - 3:00pm",
        website: "https://www.sunshinecafesf.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Trish's Mini Donuts",
        formatted_address: "Pier 39, San Francisco, CA 94133",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://cdn.vox-cdn.com/thumbor/kaUqbazJ-o7UJcajJx2q4r2VVOc=/0x0:1920x1280/1870x1403/filters:focal(807x487:1113x793):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62477892/Trish_mini.0.0.0.0.0.jpeg",
        },
        rating: 4.4,
        hours: "9:00am - 9:00pm",
        website: "https://www.trishsdishesfoods.com/trishsminidonuts",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Bob's Donuts",
        formatted_address: "1621 Polk St, San Francisco, CA 94109",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz1ljU9NY49qVjgtEj9ibLOeIqm5hV3Sc4w0TrUbbyfnb2WExn",
        },
        rating: 4.6,
        hours: "24 hours",
        website: "https://www.bobsdonutssf.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Johnny Doughnuts",
        formatted_address: "392 Fulton St, San Francisco, CA 94102",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIx1Q8gxYkXru3j8rU7cqmBc7KqFky8qM_cM2rbkSNyI_qRX30",
        },
        rating: 4.3,
        hours: "7:00am - 6:00pm",
        website: "http://johnnydoughnuts.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Twisted Donuts and Coffee",
        formatted_address: "1243 Noriega St, San Francisco, CA 94122",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH399afa4X452pQ3Klx4xmBhBYcSzStOuh1ZlbDQeoPRuOk4fQ",
        },
        rating: 4.5,
        hours: "6:00am - 5:00pm",
        website: "http://twisteddonutsf.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Dynamo Donut & Coffee",
        formatted_address: "110 Yacht Rd, San Francisco, CA 94123",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWzYVqZm6eqzpgTcVszEIMJPWEugBP91KLF84TxAhNN2OfxteX",
        },
        rating: 4.6,
        hours: "8:00am - 4:00pm",
        website: "https://dynamodonut.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "The Jelly Donut",
        formatted_address: "244 Northgate One, San Rafael, CA 94903",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "",
        },
        rating: 4.6,
        hours: "5:00am - 4:00pm",
        website: "https://www.thrillist.com/venue/eat/san-francisco/restaurants/the-jelly-donut",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Kingpin Donuts",
        formatted_address: "2521 Durant Ave, Berkeley, CA 94704",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdVH4hGJ1OPTdrDYhjKob9tl8AzJyTGl38Ie3iN52Pc8xfYj1",
        },
        rating: 4.3,
        hours: "7:00am - 3:00pm",
        website: "http://www.kingpindonuts.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Rainbow Donuts",
        formatted_address: "2025 San Pablo Ave, Berkeley, CA 94702",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRza08jf871BR4CN-9ZEAzienKuKWJLcrGa6pXUBAqXKzeuOCwB",
        },
        rating: 4.4,
        hours: "5:00am - 7:00pm",
        website: "http://orderrainbowdonuts.com/index.php",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Colonial Donuts",
        formatted_address: "3318 Lakeshore Ave, Oakland, CA 94610",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://cdn.vox-cdn.com/thumbor/aLsBFQS9ohhogxvvjQbsxmzjWNE=/0x0:1000x750/1200x900/filters:focal(420x295:580x455):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62473915/o.0.0.jpg",
        },
        rating: 4.4,
        hours: "24 hours",
        website: "https://www.yelp.com/biz/colonial-donuts-oakland-3",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Mister Bomboloni",
        formatted_address: "Ferry Building, 1 Sausalito - San Francisco Ferry Bldg, San Francisco, CA 94111",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://cdn.vox-cdn.com/thumbor/QxhlLTE4IJAyb3yeTYQARly23bw=/0x0:750x1000/1870x1403/filters:focal(302x287:422x407):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62477893/o.0.0.jpg",
        },
        rating: 4.5,
        hours: "10:00am - 3:00pm",
        website: "https://www.lebontaitaliane.com/",
        bucketlists: [],
    },
    {
        place_id: "",
        name: "Allstar Donuts",
        formatted_address: "901 Clement St, San Francisco, CA 94118",
        photo: {
            html_attributes: "",
            height: "",
            width: "",
            photo_reference: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQGUmvoMc_YMAWweg_OqUkeYmyjOegENHcTV2bom1YvKqmWw0_",
        },
        rating: 4.5,
        hours: "24 hours",
        website: "https://www.lebontaitaliane.com/",
        bucketlists: [],
    }
];

db.DonutStore.insertMany(newDonutStore, (err, donutStore) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    else {
        console.log("Created new donut store", donutStore);
        process.exit();
    }
});