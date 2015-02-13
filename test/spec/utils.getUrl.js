define(function () {
  'use strict';

  function testMakeUrl(assert, utils) {
    assert.equal(utils.makeUrl('fileName'), '../spec/fileName.js', 'utils.makeUrl works for simple file names');
    //More tests
    
  }

  function testGetUrl(assert, utils) {
    var url = 'Any desired modulePath or static file path!',
      newUrl = 'the desired url',
      url1,
      url2,
      url3;

    assert.stub(utils, 'makeUrl').returns(newUrl);

    url1 = utils.getUrl(url);
    url2 = utils.getUrl(url);
    url3 = utils.getUrl(url);

    assert.ok((newUrl === url1) && (url1 === url2) && (url2 === url3), 'utils.getUrl works as expected!');
    
    assert.ok(utils.makeUrl.calledOnce, 'utils.getUrl uses a cache system so that utils.makeUrl gets called just once for the same url');

    utils.makeUrl.restore();
  }

  fix.test('utils.getUrl', {
    message: 'utils.getUrl works as a helper utils functions'
  }).then(function (assert, utils) {
    assert.strictEqual(typeof utils.makeUrl, 'function', 'utils.makeUrl is a function');
    testMakeUrl(assert, utils);
    
    assert.strictEqual(typeof utils.getUrl, 'function', 'utils.getUrl is a function');
    testGetUrl(assert, utils);
  });
});