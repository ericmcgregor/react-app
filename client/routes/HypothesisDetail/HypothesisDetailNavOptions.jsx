HypothesisDetailNavOptions = React.createClass({
  test(){

  },
  render(){
    return(
      <ul className="nav navbar-nav pull-right">
      <li className="nav-item">
        <a href="/settings" className="nav-link" data-toggle="modal" data-target="#myModal">
          options
        </a>
      </li>
      </ul>
    )
  }
})
