const Header = ( {greeting, title} ) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{greeting}</h3>
    </div>
  )
}

export default Header