const Blog = () => {
  return (
    <div className="p-10 px-20 h-[80vh] flex flex-col justify-center  items-center">
      <div>
        <p className="text-xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </p>
        <p className="pl-2">
          <span>-> </span>Refresh tokens allow you to balance your users' access
          needs with your organization's security practices. Access tokens help
          users get the resources they need to complete their tasks . The access
          token is stored in your browser
        </p>
        <p className="text-xl font-bold">Compare SQL and NoSQL databases?</p>
        <p className="pl-2">
          <span>-> </span>SQL databases use a structured query language and have
          a defined schema. NoSQL databases use dynamic schemas for unstructured
          data.
        </p>
        <p className="text-xl font-bold">
          What is express js? What is Nest JS ?
        </p>
        <p className="pl-2">
          <span>-> </span>Express is a node js web application framework that
          provides broad features for building web and mobile applications other
          hand NestJS is a progressive Node. js framework
        </p>
        <p className="text-xl font-bold">
          What is MongoDB aggregate and how does it work (google it)?
        </p>
        <p className="pl-2 ">
          <span>-> </span>Aggregation is a way of processing a large number of
          documents in a collection by means of passing them through different
          stages. The stages make up what is known as a pipeline. The stages in
          a pipeline can filter, sort, group, reshape and modify documents that
          pass through the pipeline
        </p>
      </div>
    </div>
  );
};

export default Blog;
