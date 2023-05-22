// import { useContext } from "react";
// import { authContext } from "../../provider/Authprovider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ToyEdit = () => {
  const loader = useLoaderData();
  // const { user } = useContext(authContext);
  const handlerBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const subcategory_name = form.subcategory_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const details = form.details.value;
    const picture = form.picture.value;
    const addToy = {
      name,
      seller_name,
      seller_email,
      subcategory_name,
      picture,
      price,
      rating,
      available_quantity,
      details,
    };
    // console.log(addToy);

    fetch(`https://mango-toys-server.vercel.app/toys/${loader._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(addToy)
    })
    .then(res=> res.json())
    .then(data=>{
        // console.log(data);
        if(data.modifiedCount>0){
            toast('Updated succesfully')
        }
    })
  };
  // console.log(loader);
  return (
    <div className=" bg-base-200">
      <h2 className="text-center text-4xl pt-5">Edit a Toy {loader.name}</h2>
      <div className="hero min-h-[90vh] ">
        <div className="hero-content   w-full">
          <form className="card-body" onSubmit={handlerBtn}>
            <div className="flex gap-9">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  defaultValue={loader?.name}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">seller_name Name</span>
                </label>
                <input
                  type="text"
                  placeholder="seller_name "
                  defaultValue={loader?.seller_name}
                  name="seller_name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-9">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">seller_email</span>
                </label>
                <input
                  type="text"
                  placeholder="seller_email"
                  name="seller_email"
                  defaultValue={loader?.seller_email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Subcategory</span>
                </label>
                <input
                  type="text"
                  placeholder="subcategory_name"
                  name="subcategory_name"
                  defaultValue={loader?.subcategory_name}
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-9">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={loader?.price}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  defaultValue={loader?.rating}
                  name="rating"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-9">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">available_quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="available_quantity"
                  name="available_quantity"
                  defaultValue={loader?.available_quantity}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">picture Url</span>
                </label>
                <input
                  type="text"
                  placeholder="picture-Url"
                  defaultValue={
                    "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-8d7cf0a91bbc5d9b841ea0432a680245.jpg"
                  }
                  name="picture"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Details"
                  name="details"
                  defaultValue={loader?.details}
                  className="input input-bordered"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              ADD a Toy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyEdit;
