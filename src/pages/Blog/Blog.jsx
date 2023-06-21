import useTitle from "../../customHook/usetitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div className="p-10 sm:px-32  min-h-[80vh] flex flex-col justify-center  items-center">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 w-full rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p tabIndex={0}> Refresh tokens allow you to balance your users' access
          needs with your organization's security practices. Access tokens help
          users get the resources they need to complete their tasks . The access
          token is stored in your browser</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 w-full rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p tabIndex={1}> SQL databases use a structured query language and have
          a defined schema. NoSQL databases use dynamic schemas for unstructured
          data.</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 w-full rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p tabIndex={2}> Express is a node js web application framework that
          provides broad features for building web and mobile applications other
          hand NestJS is a progressive Node. js framework</p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 w-full rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content">
          <p tabIndex={3}>Aggregation is a way of processing a large number of
          documents in a collection by means of passing them through different
          stages. The stages make up what is known as a pipeline. The stages in
          a pipeline can filter, sort, group, reshape and modify documents that
          pass through the pipeline
        </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
