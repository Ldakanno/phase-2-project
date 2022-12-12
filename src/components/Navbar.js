import {NavLink} from 'react-router-dom';

const style= {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "black",
  backgroundColor: "green",
  fontWeight: "bold",
  verticalAlign: "center"
}

const Navbar = () => {
  return (
    <div>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/"
      >Home
      </NavLink>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/about"
      >About
      </NavLink>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/search"
      >Search
      </NavLink>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/plants/new"
      >Comment
      </NavLink>
    </div>
  )
}

export default Navbar