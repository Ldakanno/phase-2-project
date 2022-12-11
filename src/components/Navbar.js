import {NavLink} from 'react-router-dom';

const style= {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em"
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
        to="/"
      >About
      </NavLink>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/"
      >Search
      </NavLink>
      <NavLink
        activeStyle={{
          fontweight: "bolder",
          color: "red"
        }}
        exact
        style={style}
        to="/"
      >Comment
      </NavLink>
    </div>
  )
}

export default Navbar