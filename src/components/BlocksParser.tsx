import React from 'react';

// import blocks components
// import {} from './Blocks';

const components = {};

const isEmpty = (obj) => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

const BlocksParser = ({ blocks }) => {
  if (!blocks) return null;

  const filteredComponents = blocks.filter(
    (component) => component.shortname !== null,
  );

  if (filteredComponents && filteredComponents.length > 0) {
    const pageComponents = filteredComponents.map((component, index) => {
      if (isEmpty(component)) return null;
      if (!component) return null;

      const Component = components[component?.block?.shortname];

      if (!Component) return null;

      return (
        <Component index={index} key={`component-${index}`} {...component} />
      );
    });

    if (pageComponents) {
      return pageComponents;
    }
  }

  return null;
};

export default BlocksParser;
