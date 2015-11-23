AppLayout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sidenav: Session.get('sidenav'),
    }
  },
  test(){
    alert('test')
  },
  options() {
    return (
      <li className="nav-item">
        <a onClick={this.test} href="" className="nav-link">
          test
        </a>
      </li>
    )
  },
  render(){
    return (
      <div id="app-container">



      <div id="app-content-layout">


        <div id="main-content-layout">
          <GlobalNav options={this.props.options}/>

          <div className="scrollWrapper">
            {this.props.content}
          </div>
        </div>

        </div>

      </div>
    );
  }
})
