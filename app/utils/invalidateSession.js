export default function (context) {
  context.get('session').invalidate();
  context.transitionTo('index');
}
