const express = require("express");
const { readdir } = require("fs");
const app = express();
const path = require("path");
const port = 3000;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public/style")));
app.use(express.static(path.join(__dirname , "public/script")));
app.use(express.static(path.join(__dirname , "public/assets")));
app.use(express.static("views/assets"));
app.use(methodOverride('_method'));

app.use(express.json());  // For JSON data
app.use(express.urlencoded({ extended: true }));  // For form data


let posts = [
    {
        id: uuidv4(),
        username: "Narendra_Naik",
        caption: "Enjoying the sunset at the beach! 🌅",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        id: uuidv4(),
        username: "Sumit_Rathod",
        caption: "Just finished this amazing painting! 🎨",
        image: "https://images7.alphacoders.com/372/thumb-1920-372776.jpg"
    },
    {
        id: uuidv4(),
        username: "Tushar_Kadam",
        caption: "Exploring the mountains today! 🏔️",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    },
    {
        id: uuidv4(),
        username: "Ankit_Patil",
        caption: "Delicious homemade pasta for dinner! 🍝",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    },
    {
        id: uuidv4(),
        username: "fitness_frank",
        caption: "Morning workout complete! 💪",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155"
    }
];

app.get("/" , (req , res) => {
    res.render("index.ejs" , {posts});
});

app.get("/help" , (req , res) => {
    res.render("help.ejs");
});

app.get("/about" , (req , res) => {
    res.render("about.ejs");
});

app.get("/friends" , (req , res) => {
    res.render("friends.ejs");
});

app.get("/setting" , (req , res) => {
    res.render("setting.ejs");
});

app.get("/profile" , (req , res) => {
    res.render("profile.ejs");
});

app.get("/notification" , (req , res) => {
    res.render("notification.ejs");
});

app.get("/new" , (req , res) => {
    res.render("add.ejs");
});

app.post("/new" , (req , res) => {
    let {username , caption , image} = req.body;
    let id = uuidv4();
    posts.push({id ,username , caption , image});
    res.redirect("/");
});

app.delete("/:id" , (req , res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/");
})

app.patch("/:id" , (req , res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    let newCaption = req.body.caption;
    let newImg = req.body.image;
    post.caption = newCaption;
    post.image = newImg;
    res.redirect("/");
});

app.get("/:id/edit" , (req , res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , {post});
});;

app.get("/:id" , (req , res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("view.ejs" , {post}); 
});

app.listen(port , () => {
    console.log(`App is listening on port : ${port}.....`);
});