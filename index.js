const express=require("express")
const app=express();
const port=8080;

const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override")

 

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")))

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})


app.get("/",(req,res)=>{
    res.render("raw.ejs")
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id === p.id)
    // console.log(post)
    res.render("show.ejs",{post})
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id)
    res.render("edit.ejs",{post})
})



app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts")

})

app.patch("/posts/:id",(req,res)=>{
    let { id }=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id==p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts")
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=> id !==p.id);
    res.redirect("/posts");
});


let posts=[
    {
        id:uuidv4(),
        username:"shubham",
        content:"i love Coding"
    },
    {
        id:uuidv4(),
        username:"hacker",
        content:"hacking is the one of the most satisfying job"
    },
    {
        id:uuidv4(),
        username:"Coder",
        content:"to be a Coder is the toughest situation right now"
    },
]