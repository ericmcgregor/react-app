LoginView = React.createClass({
  getInitialState() {
    return {
      user:'',
      password:''
    }
  },
  handleChange(key, value, evt) {
    let state = {}
    state[key] = value ? value : evt.target.value;
    this.setState(state)
  },
  handleLogin() {
    Meteor.loginWithPassword(this.state.user, this.state.password, function(err){

    });
  },
  render(){
    return (
      <div id="app-container">

        <GlobalNav />


        <div id="app-content-layout">

          <div id="main-content-layout">
            <div>
              <div className="container">
                <div className="row m-t-lg">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="card">
                      <div className="card-block">
                        <h4>Login</h4>
                        <hr />
                        <form>
                          <fieldset className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              value={this.state.user}
                              onChange={this.handleChange.bind(this, 'user', null)}
                              placeholder="Username" />

                          </fieldset>
                          <fieldset className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={this.state.password}
                              onChange={this.handleChange.bind(this, 'password', null)}
                              placeholder="Password" />
                          </fieldset>
                          <span onClick={this.handleLogin} className="btn btn-primary">Login</span>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>

        </div>

      </div>
    );
  }
})
