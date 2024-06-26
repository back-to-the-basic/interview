/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
  osSidebar: [{ type: 'autogenerated', dirName: 'operating-system' }],
  computerStructureSidebar: [{ type: 'autogenerated', dirName: 'computer-structure' }],
  networkSidebar: [{ type: 'autogenerated', dirName: 'network' }],
  reactSidebar: [{ type: 'autogenerated', dirName: 'react' }],
  javascriptSidebar: [{ type: 'autogenerated', dirName: 'javascript' }],
  webSidebar: [{ type: 'autogenerated', dirName: 'web' }],
  etcSidebar: [{ type: 'autogenerated', dirName: 'etc' }],
};

module.exports = sidebars;
