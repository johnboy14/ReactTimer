var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});
