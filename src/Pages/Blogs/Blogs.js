import React from "react";

const Blogs = () => {
  return (
    <div className="blogs-bg">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 mt-10 container mx-auto">
        <div className="question-one border p-3">
          <h2 className="text-2xl font-bold">
            Difference between javascript and nodejs
          </h2>
          <div className="question-answer mx-2 flex mt-2">
            <div className="one">
              <h3 className="text-lg font-bold">Javascript</h3>
              <p>1. JS is a script language</p>
              <p>2. JS using frontend website development</p>
              <p>3. It is run to chrome browser in v8 engine</p>
            </div>
            <div className="two">
              <h3 className="text-lg font-bold">NodeJs</h3>
              <p>1. NodeJS is a Javascript runtime environment</p>
              <p>2. NodeJS using to server site connection</p>
              <p>3. NodeJS inside not using HTML tags</p>
            </div>
          </div>
        </div>

        <div className="question-two  border p-3">
          <h2 className="text-2xl font-bold">
            {" "}
            When should you use Nodejs and when should you use mongodb?
          </h2>
          <p>
            First, to answer your question, you generally use middleware for
            this. One tried-and-true solution is to use Express as your web
            server and Mongoose as an ORM (Object Relational Mapper, a way to
            talk to the database from your app). Secondly, for the deeper
            answer, I don’t actually recommend learning Mongo for new
            developers. Although Mongo has its use cases, SQL is far more common
            in the workplace. There are a few companies that use Mongo or other
            NoSQL databases, but almost everyone uses some flavor of SQL. So, if
            you want to learn to connect a Node app to a database, I would
            recommend you go that way.
          </p>
        </div>

        <div className="question-one border p-3">
          <h2 className="text-2xl font-bold">
            Differences between sql and nosql databases?
          </h2>
          <div className="question-answer mx-2 flex mt-2">
            <div className="one">
              <h3 className="text-lg font-bold">SQL</h3>
              <p>
                1. A language used to communicate with databases for storage,
                deletion, updation, insertion and retrieval of data.
              </p>
              <p>2. SQL databases support Structured Query Languages.</p>
              <p>3. Supports table based data type.</p>
              <p>4. SQL does not support hierarchical storage of data.</p>
            </div>
            <div className="two">
              <h3 className="text-lg font-bold">NoSQL</h3>
              <p>
                1. A software to retrieve, store and manage scalability of
                databases.
              </p>
              <p>2. NonSQL does not have any declarative query language.</p>
              <p>
                3. Supports document oriented, graph databases, key value
                pair-based.
              </p>
              <p>4. NoSQL is best suited for hierarchical storage of data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
