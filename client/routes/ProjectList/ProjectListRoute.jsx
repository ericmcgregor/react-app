projectRoutes.route('/', {
  name:'projects-list',
  action:function(){
    ReactLayout.render(AppLayout, {content:<ProjectListView />, options:<ProjectNavOptions />})
  },
  triggersEnter:[function(){
    Session.set({'navtitle':'Projects'})
  }]
})
