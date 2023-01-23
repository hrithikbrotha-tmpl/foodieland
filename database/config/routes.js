// const about = require("../../routes/about");
// const authors = require('./../../routes/authors');
const blogs = require("./../../routes/blogs&recipies");
const subscribers = require("./../../routes/subscribers");
// const singleBlog = require("./../../routes/singleBlog");

module.exports =(app) =>{

      console.log("routes are working....");

      
      app.use("/", blogs); 
      app.use("/blog" , blogs);
      app.use("/blog/:id", singleBlog);

      app.use("/subscribers", subscribers);

//       app.use("/authors", authors);
      
//       app.use("./about", about);
      
}