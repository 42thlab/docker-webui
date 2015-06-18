export default function (context, callback=null) {
  return function(error) {
    switch (error.status) {
      case 401:
        context.get('session').invalidate();
        context.transitionTo('index');
        break;
    };

    if (callback) { callback(error); };
  }
}
