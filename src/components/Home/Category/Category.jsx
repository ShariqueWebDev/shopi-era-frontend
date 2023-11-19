import "./Category.scss";
import Spinner from "../../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const Category = ({ categories, loading }) => {

  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      {!!loading ? (
        <Spinner />
      ) : (
        <div className="categories">
          {categories?.data?.map((cat) => {
            return (
              <div className="category" key={cat?.id} onClick={()=>{navigate(`/single-category/${cat?.id}`)}}>
                <img src={cat?.attributes?.img?.data?.attributes?.url} alt="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
