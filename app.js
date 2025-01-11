const express = require("express");
const app = express();
const path = require("path")
const { Server } = require('socket.io');
const { createServer } = require('http');
const mongoos = require('mongoose');
const Poll = require('./public/model/pollSchema.js');
const Msg = require('./public/model/msgSchema.js');
// const { timeStamp } = require("console");
const { name } = require("ejs");

count = 0;    //totla view
const port = 3000;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

async function main() {
    await mongoos.connect('mongodb://127.0.0.1/polldata');

}


main().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.render("index")
});

const arr = [];
let views = 0;


app.get("/create", (req, res) => {
    res.render("createPoll.ejs")
});

app.get('/dashboard', (req, res) => {
    res.render('dash.ejs', { count });
});

app.get('/poll', (req, res) => {
    res.render('pool.ejs');
});

app.get('/blog', (req, res) => {
    res.render('blog.ejs');
});


app.get("/poll/:name", async (req, res) => {
    let pollName = req.params.name;  // Correctly extracting 'name' from the URL
    // console.log(pollName);  // Log to ensure it's a string (not an object)

    // Ensure pollName is just a string before passing it to the query
    if (typeof pollName !== 'string') {
        return res.status(400).send('Invalid poll name');
    }

    let data = await Poll.find({ name: `${pollName}` });  // Query based on the string value

    // If no data is found
    if (!data || data.length === 0) {
        return res.status(404).send("Poll not found");
    }

    // console.log({data});  // Debugging data returned from the database
    res.render('pool.ejs', { data });
});

app.get("/delete/:name", async (req, res) => {
    let pollName = req.params.name;
    // console.log(pollName);

    if (typeof pollName !== 'string') {
        return res.status(400).send('Invalid poll name');
    }

    let data = await Poll.findOneAndDelete({ name: `${pollName}` });  // Query based on the string value
    // console.log(data);
    // If no data is found

    if (!data || data.length === 0) {
        return res.status(404).send("Poll not found");
    }
    res.redirect("/dashboard")

});




app.get('/voting/:name', async (req, res) => {
    let pollName = req.params.name;
    let allData = await Poll.find({ name: `${pollName}` });
    // console.log(pollName,data);


    const selectedOptionsCount = {};

    for (const i of allData) {
        // console.log(i);
        for (const j of i.selectedOptions) {
            // console.log(j);

            // Increment the count for each selected option
            selectedOptionsCount[j] = (selectedOptionsCount[j] || 0) + 1;
        }
    }

    // console.log("Selected Options Count:", selectedOptionsCount);
    // io.on('connection',(socket)=>{
    //     io.emit('voting',selectedOptionsCount);
    // });


    res.render('voting.ejs', { allData, selectedOptionsCount });
})



app.get('/feedback', async (req, res) => {
    let data = await Msg.find()
    res.render('forume.ejs', { data });
});

io.on('connection', async (socket) => {
    // console.log('connected');

    socket.on('feedback', async (data) => {

        // console.log(data);

        await Msg.create({
            name: data.newName,
            msg: data.newFeedback,

        }).then((r) => {
            let res = "ok";
            io.emit("res", res)
        })

    })


    socket.on('clicked_option', async (pollOption) => {
        // console.log(pollOption);
        const data = await Poll.updateMany(
            { name: pollOption.newName },
            { $push: { selectedOptions: pollOption.selectedOption } }
        );

    });



    //-----totaal view count
    let Alldata = await Poll.find();
    for (d of Alldata) {
        count = count + d.views;
    }
    // console.log(count);
    // socket.emit("total_views",count)
    //rendered 

    //------



    socket.on('poll_name_v', async (pollName) => {
        let data = await Poll.find({ name: `${pollName}` });

    })

    socket.on('view', async (viewAndpoll_name) => {

        // console.log(viewAndpoll_name.newName);

        // console.log(viewAndpoll_name.Newviews);
        let data = await Poll.updateOne({ name: viewAndpoll_name.newName }, { $set: { views: Number(viewAndpoll_name.Newviews) } });
        // console.log(data);
        let a = viewAndpoll_name.Newviews;
        io.emit('views_update', a);


    })



    socket.on('arr', async (data) => {

        let nname = String(data[0].name);
        const options = [];
        let quetion = data[0].quetion;
        // console.log(nname);
        for (item of data) {
            options.push(item.option);
            // console.log(item);
        }
        try {

            const insertedData = await Poll.create({
                quetion: quetion,  // Assuming `data` contains an array of objects
                option: options,
                name: String(nname),
                // Collect all options into an array
            });

            // console.log('Inserted data:', insertedData);

            io.emit('receivedArray', insertedData); // Send inserted data back to clients
        } catch (error) {
            // console.error('Error while inserting data:', error);
        }
    });





    let data = await Poll.find();

    // console.log('final data',data);
    io.emit('sendFinalData', data);





    // io.emit('test',count);

    socket.on('disconnect', () => {
        // console.log('disconnecct');
        count = 0;
    })
})









server.listen(port, () => {
    console.log(`listning on ${port}`);
});