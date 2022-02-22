import FeaturedInfo from "../../compenents/featuredInfo/FeaturedInfo"
import { userData } from "../../dummyData";
import Chart from "../../compenents/chart/Chart";
import "./Home.css"
import withAdmin from "../../withAdmin";

const Home = (props) => {
  return (
    <div className="home">
      
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default withAdmin(Home);