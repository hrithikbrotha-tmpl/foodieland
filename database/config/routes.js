const about = require("../../routes/about");
const blogs = require("../../routes/blogs&recipies");
const subscribers = require("../../routes/subscribers");
const singleBlog = require("../../routes/singleBlog");
const questions = require("../../routes/questions");
const search = require("../../routes/search");
const authors = require('../../routes/authors');
const topRecipiesRouter = require("../../routes/topRecipies");

module.exports =(app) =>{

      console.log("routes are working....");

      
      app.use("/", blogs); 
      app.use("/blog" , blogs);
      app.use("/about", about);
      app.use('/questions' ,questions);
      app.use("/blog", singleBlog);
      app.use("/subscribers", subscribers);
      app.use('/' , search);
      app.use("/authors", authors); 
      app.use('/' , topRecipiesRouter)
}