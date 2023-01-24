const about = require("../../routes/about");
const authors = require('../../routes/authors');
const blogs = require("../../routes/blogs&recipies");
const subscribers = require("../../routes/subscribers");
const singleBlog = require("../../routes/singleBlog");
const questions = require("../../routes/questions");
const search = require("../../routes/search");
const topRecipiesRouter = require("../../routes/topRecipies");

module.exports =(app) =>{

      console.log("routes are working....");

      
      app.use("/", blogs); 
      app.use("/blog" , blogs);
      app.use("/blog", singleBlog);
      app.use("/about", about);
      app.use('/questions' ,questions);
//   app.use("/authors", authors); 
//       app.use('/' , search);
//       app.use('/' , topRecipiesRouter)
//       app.use("/subscribers", subscribers);
}