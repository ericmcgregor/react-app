ProjectNavOptions = React.createClass({
  test(){
    alert('test')
  },
  render(){
    return(
      <ul className="nav navbar-nav pull-right">
        <li className="nav-item">
          <a href="" className="nav-link" data-toggle="modal" data-target="#myModal">
            New Project
          </a>
        </li>
      <li className="nav-item">
        <a href="/settings" className="nav-link" data-toggle="modal" data-target="#settingsModal">
          settings
        </a>
      </li>
      </ul>
    )
  }
})
