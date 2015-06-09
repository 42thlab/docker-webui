import DS from "ember-data";
import EmberValidations from 'ember-validations';

let User = DS.Model.extend(EmberValidations.Mixin,
{
  email: DS.attr(),
  password: DS.attr()
});

User.reopen({
  validations: {
    email: {
      presence: true,
      length: { minimum: 5 }
    },
    password: {
      presence: true,
      length: { minimum: 6 }
    }
  }
});

export default User;
