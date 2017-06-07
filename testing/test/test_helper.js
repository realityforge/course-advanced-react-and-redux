import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

//$.fn means any object created by jquery will have this "simulate"
//method available off it.
$.fn.simulate = function(eventName, value) {
  // this is the element selected. i.e. In $('div').simulate(...) this will refer to $('div')
  if (value) {
    this.val(value);
  }
  // As this is a collection (i.e. $('div') is all matching elements) we need
  // to access first element when simulating event.
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
