AppLayout = React.createClass({
  render(){
    return (
      <div id="app-container">

        <GlobalNav />


      <div id="app-content-layout">

        <SideNav />


        <div id="main-content-layout">
          <div>
            {this.props.content}
          </div>
        </div>

        </div>
      </div>
    );
  }
})
