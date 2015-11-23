ProjectNavOptions = React.createClass({
  test(){
    alert('test')
  },
  render(){
    return(
      <ul className="nav navbar-nav pull-right">
      <li className="nav-item">
        <a href="/settings" className="nav-link">
          settings
        </a>
      </li>
      </ul>
    )
  }
})
