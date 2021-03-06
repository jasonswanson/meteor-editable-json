Package.describe({
  name: 'jswanson:editable-json',
  version: '0.6.4',
  summary: 'Editable JSON for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jasonswanson/meteor-editable-json.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  debugOnly: false
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
 
  api.use(['templating','blaze','spacebars','jquery','reactive-var','reactive-dict'],'client');
  api.use('underscore');
  api.use('check');
  api.use('aldeed:template-extension@4.0.0','client');
  api.use('aldeed:collection2@2.9.1', {weak: true}); // This must go before: api.use('dburles:mongo-collection-instances@0.3.1');
  api.use('dburles:mongo-collection-instances@0.3.5');
  
  api.addFiles('editable-json-common.js');
  api.addFiles('editable-json.css','client');
  api.addFiles('editable-json.html','client');
  api.addFiles('editable-json-client.js','client');
  
  api.export('EditableJSON');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-json');
  api.addFiles('editable-json-tests.js');
});
