import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/648316070/photo/choosing-food.jpg?b=1&s=170667a&w=0&k=20&c=NUfDWQz0J30ZZhkPmgQvwYKCCMGQD5nIqNMZdpL9o3A="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Free Breakfast</span>
        <span className="fpPrice">With Multi-continent varieties</span>
        <div className="fpRating">
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Gym & Spa</span>
        <span className="fpPrice">Starting from Rs.900/night</span>
        <div className="fpRating">
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/928085574/photo/valet-giving-receipt-to-businessperson-sitting-inside-car.jpg?b=1&s=170667a&w=0&k=20&c=qVbx5o-rrzl5RJUk2cCdragRfL1VooY6FqY27-EoANE="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Free Parking & Vallet</span>
        <span className="fpPrice">No fares</span>
        <div className="fpRating">
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1402700264/photo/teacher-with-a-group-of-elementary-students-playing-with-toy-blocks.jpg?b=1&s=170667a&w=0&k=20&c=pC8b5jyKPBJoOr0_kjHFMEtKARgjPrF_HUkvpoPF8pw="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pets & Kids Care</span>
        <span className="fpPrice">Including best Packages</span>
        <div className="fpRating">
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
