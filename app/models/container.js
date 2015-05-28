import DS from 'ember-data';

let Container = DS.Model.extend({
  node: DS.belongsTo('node'),
  command: DS.attr(),
  image: DS.attr(),
  names: DS.attr(),
  status: DS.attr()
});

Container.reopenClass({
  FIXTURES: [
    {
      id: 1,
      node: 1,
      command: 'ember serve',
      image: 'dockerwebui_web:latest',
      names: ['/dockerwebui_web_1'],
      status: 'Up 5 hours'
    },
    {
      id: 2,
      node: 1,
      command: 'node index.js',
      image: 'foliea/docker-proxy:latest',
      names: [
        '/dockerwebui_api_1',
        '/dockerwebui_web_1/api',
        '/dockerwebui_web_1/api_1',
        '/dockerwebui_web_1/dockerwebui_api_1'
      ],
      status: 'Up 5 hours'
    }
  ]
});

export default Container;
