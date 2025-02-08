var express=require("express");
var mongoose=require("mongoose");
var path=require("path");
var cors=require("cors");
var fileuploader=require("express-fileupload");
// const { ConnectionCheckOutStartedEvent } = require("mongodb");


var app=express();
app.listen(2004,function(){
    console.log("Server Started...");
})
app.use(express.urlencoded({extended:true}));
// var url="mongodb+srv://jindalrakshit3:kwF3zA9JCPdQP@G@cluster0.nq3c7.mongodb.net/DairyDash";
var url="mongodb+srv://jindalrakshit3:3qmszu8b6Zwhmvt7@cluster0.nq3c7.mongodb.net/DairyDash"
mongoose.connect(url).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})
app.use(fileuploader());
app.use(cors());
// var userSchema=mongoose.Schema;
var userSchema = mongoose.Schema;


var userColSchemaa={
    uid:{type:String,required:true,index:true,unique:true},
    pwd:{type:Number},
    name:{type:String},
    picpath:{type:String},
    address:{type:String},
    contact:{type:Number},
    milktype:{type:String},
    delhrs:{type:String},
    milkman:{type:String},
}
var dailyDeliverySchemaa={
    uid:{type:String,required:true,index:true,unique:true},
    address:{type:String},
    status:{type:Number,default:0},
    price:{type:Number},
    milkman:{type:String}
}
var earningSchemaa={
    milkman:{type:String,unique:true},
    earning:{type:Number,default:0},
    orders:{type:Number,default:0}
}
var milkManSchemaa={
    uid:{type:String,required:true,index:true,unique:true},
    pwd:{type:Number},
    name:{type:String},
    area:{type:String},
    contact:{type:Number},
    milktype:{type:String},
    price:{type:Number},
    picpath:{type:String},
    rating:{type:Number,default:0}
}
var BillSchemaa={
    uid:{type:String,required:true,index:true,unique:true},
    bill:{type:Number,default:0}
}
var UserSchemaa={
    uid:{type:String,required:true,index:true,unique:true},
    pwd:{type:Number},
    type:{type:String}
}
var ver={
    versionKey:false,
}
var userColSchema=new userSchema(userColSchemaa,ver);
var dailDeliverySchema=new userSchema(dailyDeliverySchemaa,ver);
var earningSchema=new userSchema(earningSchemaa,ver);
var milkManSchema=new userSchema(milkManSchemaa,ver);
var BillSchema=new userSchema(BillSchemaa,ver)
var UserSchema= new userSchema(UserSchemaa,ver);

var UserColRef=mongoose.model("userCollection",userColSchema);
var dailyDeliveryRef=mongoose.model("dailyDelivery",dailDeliverySchema);
var earningRef=mongoose.model("earnings",earningSchema);
var MilkManRef=mongoose.model("milkmanCollection",milkManSchema);
var BillRef=mongoose.model("billCollection",BillSchema)
var UserRef=mongoose.model("signups",UserSchema)

app.get("/signup",(req,resp)=>{
    console.log(req.query);
        var data=UserRef(req.query);
        data.save().then((document)=>{
            resp.send(document) 
        }).catch((err)=>{
            console.log(err.message);
        })
})


app.post("/saveuser", (req, resp) => {
    let filename = "nopic.jpg";
    // console.log(req.body.uid);

    if (req.files && req.files.ppic) {
        filename = req.files.ppic.name;
        const filepath = path.join(__dirname, "uploads", filename);

        req.files.ppic.mv(filepath, (err) => {
            if (err) {
                console.log("File upload failed:", err);
                return resp.json({ status: false, msg: "File upload failed" });
            }
            console.log("File uploaded successfully");
        });
    } else {
        console.log("No file uploaded");
    }

    req.body.picpath = filename;

    var userJson = new UserColRef(req.body);
    userJson
        .save()
        .then((document) => {
            resp.json({ doc: document, status: true, msg: "Saved successfully with pic" });
        })
        .catch((err) => {
            resp.json({ status: false, msg: err.message });
        });
});




app.post("/savemilkman", async (req, resp) => {
    let filename = "nopic.jpg";

    if (req.files && req.files.ppic) {
        const uniqueFilename = `${Date.now()}_${req.files.ppic.name}`;
        const filepath = path.join(__dirname, "..","uploads", uniqueFilename);

        try {
            await req.files.ppic.mv(filepath);
            console.log("File uploaded successfully");
            filename = uniqueFilename; 
        } catch (err) {
            console.error("File upload failed:", err);
            return resp.json({ status: false, msg: "File upload failed" });
        }
    } else {
        console.log("No file uploaded");
    }

    const { uid, name, price, milktype, contact } = req.body;
    if (!uid || !name || !price || !milktype || !contact) {
        return resp.json({ status: false, msg: "All fields are required" });
    }

    try {
        req.body.picpath = filename; // Add file path to body
        const userJson = new MilkManRef(req.body);
        const document = await userJson.save();

        return resp.json({ doc: document, status: true, msg: "Saved successfully with pic" });
    } catch (err) {
        console.error("Database save failed:", err);
        return resp.json({ status: false, msg: err.message });
    }
});


app.get("/finduser",(req,resp)=>{
    UserColRef.find().then((document)=>{
        resp.send(document)
}).catch((err)=>{
        console.log(err.message);
        resp.send(err.message)

})
})

app.post("/deleteone",(req,resp)=>{
    UserColRef.deleteOne({ uid: req.body.uid }).then((msg) => {
        if(msg.deletedCount==1)
        resp.json({status: true, message: "Deleted "})
else
        resp.json({status: true, message: "Invalid ID "})
    }).catch((err) => {
        resp.send(err.message);
    })
})

app.post("/savedaily", (req, resp) => {
    console.log(req.body);

    var userObj = new dailyDeliveryRef(req.body);

    userObj.save()
        .then((document) => {
            console.log("Order saved successfully");

            earningRef.updateOne(
                { milkman: "abc" },
                {
                    $inc: { earning: req.body.price, orders: 1 }
                }
            )
            .then(() => {
                console.log("Earnings updated successfully");

                BillRef.updateOne(
                    { uid: req.body.uid },
                    {
                        $inc: { bill: req.body.price }
                    }
                )
                .then(() => {
                    console.log("Bill updated successfully");

                    resp.json({
                        status: true,
                        msg: "Order saved, earnings updated, and bill updated successfully",
                        doc: document
                    });
                })
                .catch((err) => {
                    console.error("Error updating bill:", err.message);
                    resp.json({
                        status: false,
                        msg: "Failed to update bill",
                        error: err.message
                    });
                });
            })
            .catch((err) => {
                console.error("Error updating earnings:", err.message);
                resp.json({
                    status: false,
                    msg: "Failed to update earnings",
                    error: err.message
                });
            });
        })
        .catch((err) => {
            console.error("Error saving order:", err.message);
            resp.json({
                status: false,
                msg: err.message
            });
        });
});


app.post("/deletedaily",(req,resp)=>{
    dailyDeliveryRef.deleteOne({ uid: req.body.uid }).then((msg) => {
        if(msg.deletedCount==1)
        resp.json({status: true, message: "Deleted "})
else
        resp.json({status: true, message: "Invalid ID "})
    }).catch((err) => {
        resp.send(err.message);
    })
})

app.get("/upcoming",(req,resp)=>{
    dailyDeliveryRef.find({status:0,milkman:"abc"}).then((document)=>{
        resp.send(document)
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
})
app.get("/totalcustomers",(req,resp)=>{
    UserColRef.find({milkman:"abc"}).countDocuments({}).then((count)=>{ //instead of abc edit it to get the details from the milkman profile from frontend 
        // resp.send(document)
        resp.json({status:true,totalCustomers:count})
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message)
    })
})

app.get("/pendingorders",(req,resp)=>{
    dailyDeliveryRef.find({status:0,milkman:"abc"}).countDocuments({}).then((count)=>{ 
        // resp.send(document)
        resp.json({status:true,totalCustomers:count})
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message)
    })
})


// personal use 
app.post("/savetoearning",(req,resp)=>{
    console.log(req.body);
    var userObj=new earningRef(req.body);
    userObj.save().then((document)=>{
        resp.json({doc:document,status:true,msg:"saved to earnings"})
    }).catch((err)=>{
        console.log(err.message);
        resp.json({status:false,msg:err.message});
    })
})

app.get("/totalorders",(req,resp)=>{
    earningRef.findOne({milkman:"abc"}).then((document)=>{
        if (document) {
                            resp.json({ status: true, totalOrders: document.orders });
                        } else {
                            resp.json({ status: false, message: "Milkman not found" });
                        }
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
})

app.get("/totalearning",(req,resp)=>{
    earningRef.findOne({milkman:"abc"}).then((document)=>{  //update code for milkman
        if (document) {
                            resp.json({ status: true, totalEarning: document.earning });
                        } else {
                            resp.json({ status: false, message: "Milkman not found" });
                        }
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
})
app.get("/aov",(req,resp)=>{
    earningRef.findOne({milkman:"abc"}).then((document)=>{
        if(document){
            const average=document.earning/document.orders;
            resp.json({status:true,aov:average})
        }
        else{
            resp.json({status:false,message:"Milkman not Found"})
        }
    }).catch((err)=>{
        console.log("error fetching data",err.message);
        resp.json({
            status:false,
            message:err.message
        });
    });
});

app.get("/percentageHighValueCustomers", (req, resp) => {
    const milkman = "abc"; // Replace this with dynamic input if needed

    dailyDeliveryRef.countDocuments({ milkman })
        .then((totalCustomers) => {
            if (totalCustomers === 0) {
                return resp.json({
                    status: false,
                    message: "No customers found for this milkman",
                    percentage: 0,
                });
            }

            dailyDeliveryRef.countDocuments({ milkman, price: { $gte: 100 } })
                .then((highValueCustomers) => {
                    const percentage = (highValueCustomers / totalCustomers) * 100;

                    resp.json({
                        status: true,
                        totalCustomers,
                        highValueCustomers,
                        percentage: percentage.toFixed(2) + "%",
                    });
                })
                .catch((err) => {
                    console.error("Error fetching high-value customers:", err.message);
                    resp.json({ status: false, message: err.message });
                });
        })
        .catch((err) => {
            console.error("Error fetching total customers:", err.message);
            resp.json({ status: false, message: err.message });
        });
});



// consumer dashboard 

app.get("/upcomingorderconsumer",(req,resp)=>{
    dailyDeliveryRef.find({status:0,uid:"user6@gmail.com"}).then((document)=>{
        resp.send(document)
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message)
    })
})


// personal use
app.post("/savetobill",(req,resp)=>{
    console.log(req.body);
    var userObj=new BillRef(req.body);
    userObj.save().then((document)=>{
        resp.json({doc:document,status:true,msg:"saved to Bill"})
    }).catch((err)=>{
        console.log(err.message);
        resp.json({status:false,msg:err.message});
    })
})

app.get("/totalbill",(req,resp)=>{   //needs axios updating
    BillRef.findOne({uid:"user19@gmail.com"}).then((document)=>{
        resp.send(document)
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
})


app.get("/currentvendor", (req, resp) => {
    const uid="user@gmail.com"
    if (!uid) {
        return resp.json({
            status: false,
            msg: "UID is required",
        });
    }

    UserColRef.findOne({ uid: uid }, { milkman: 1, _id: 0 }) // Select only the milkman field
        .then((document) => {
            if (document) {
                resp.json({
                    status: true,
                    milkman: document.milkman,
                });
            } else {
                resp.json({
                    status: false,
                    msg: "User not found",
                });
            }
        })
        .catch((err) => {
            console.error(err.message);
            resp.json({
                status: false,
                msg: "Error retrieving milkman",
                error: err.message,
            });
        });
});

// show milkman listings 
app.get("/showmilkman",(req,resp)=>{
    MilkManRef.find().then((document)=>{
        resp.send(document)
}).catch((err)=>{
        console.log(err.message);
        resp.send(err.message)

})
})

app.get("/checkUser", (req, resp) => {
    UserRef.find({
        uid: req.query.uid,
        password: req.query.password
    }).then((doc) => {
        if (doc.length === 0) {  // Check if no document is found
            resp.send("not found");
        } else {
            resp.send(doc);
        }
    }).catch((err) => {
        console.log(err.message);
        resp.status(500).send("Error occurred");
    });
});

app.get("/saveUser",(req,resp)=>{
    console.log(req.query);
        var data=UserRef(req.query);
        data.save().then((document)=>{
            resp.send(document) 
        }).catch((err)=>{
            console.log(err.message);
        })
})