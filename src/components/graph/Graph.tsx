import "./Graph.scss";
import arrow from "../../images/map/Vector.png";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  Area,
} from "recharts";

const Graph = () => {
  const data = [
    {
      name: "Jan",
      uv: 150,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 200,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 300,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Apr",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "May",
      uv: 178,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jun",
      uv: 250,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Jul",
      uv: 200,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Aug",
      uv: 50,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sep",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Oct",
      uv: 150,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Nov",
      uv: 145,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Dec",
      uv: 300,
      pv: 2400,
      amt: 2400,
    },
  ];
  return (
    <div className="p-graph">
      <div className="p-graph__header">
        <p className="p-graph__header__text">Follwers Growth</p>
        <div className="p-graph__header__month">
          <p className="p-graph__header__month__text">Monthly</p>
          <img className="p-graph__header__month__image" src={arrow} alt="arrow" />
        </div>
      </div>
      <AreaChart
        className="graph"
        width={810}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#303974" stopOpacity={0.152} />
            <stop offset="107.98%" stopColor="#303974" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#303974"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};
export default Graph;
