import Image from "next/image";

const singleProducts = ({product}) => {
    const {title,image,description}=product
    return (
<div className="bg-white m-2 ">
<Image
        src={image}
        alt="Picture of the author"
        width={300}
        height={300}
      />
      <div className="p-2">
      <h6>{title}</h6>
      <p>{description.slice(0,30)}</p>
      <button className="py-1 px-4 bg-green-300 rounded">Details</button>
      </div>
</div>
    );
};

  
export default singleProducts;