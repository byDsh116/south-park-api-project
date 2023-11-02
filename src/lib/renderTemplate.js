require('@babel/register');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

module.exports = function renderTemplate(component, props, res) {
  const element = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
};
