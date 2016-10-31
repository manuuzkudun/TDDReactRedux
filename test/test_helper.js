import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import jquery from 'jquery';

// Set up testing enviroment to run like a browser in the command line
global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events


// Set up chai-jquery
