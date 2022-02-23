import Airtable, { Base } from "airtable";

let airtableClient : Airtable;
let blogBase : Base;
console.log(process.env);
airtableClient = new Airtable ({ apiKey: process.env.AIRTABLE_API_KEY});
blogBase = airtableClient.base(process.env.AIRTABLE_BASE as string);

var getPosts = () => {
  return new Promise((resolve, reject) => {

    blogBase('Table 1').select({
      view: 'Grid view'
    }).firstPage(function(err, records : any) {
        
      if (err) {
           console.error(err); 
           return resolve(err); 
        }

        var posts : any = [];
        records.forEach(function(record : any) {
            posts.unshift({
              title: record.get('Title'),
              content: record.get('Content'),
              date: record.get('Date')
            });
        });
        resolve(posts);
    });
  });
};

export { getPosts };
