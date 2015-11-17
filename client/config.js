
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
Accounts.onLogin(function(){
  FlowRouter.go('/projects')
})
Tracker.autorun(function(){
  if(!Accounts.userId()) {
    FlowRouter.go('/login')
  }
})
// Hooks.onLoggedOut(function(){
//   console.log('test')
//   FlowRouter.go('/login')
// })
