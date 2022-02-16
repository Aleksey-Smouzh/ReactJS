import "./Sitebar.css";
import articles from "../Data/articles.json";
function Sitebar() {
  return (
    <>
      {" "}
      <div className="Sitebar">
        <nav>
          {articles.map((item) => (
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
}
export default Sitebar;
