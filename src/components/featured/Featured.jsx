import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <a href="/hotels">
          <img
            src="https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?b=1&s=170667a&w=0&k=20&c=K3NXBBR1CgaR0WNF9R6QaQd-8bdrDrq74VFn9xRInTI="
            alt=""
            className="featuredImg"
          />
        </a>
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>12 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <a href="/hotels">
          <img
            src="https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?b=1&s=170667a&w=0&k=20&c=8cLxZTG_dgYO_pibRzv0QESprWcok_QL2xBleCAC2W0="
            alt=""
            className="featuredImg"
          />
        </a>
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>53 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <a href="/hotels">
          <img
            src="https://images.unsplash.com/photo-1565018054866-968e244671af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2Fsb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="featuredImg"
          />
        </a>
        <div className="featuredTitles">
          <h1>Bangalore</h1>
          <h2>32 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
