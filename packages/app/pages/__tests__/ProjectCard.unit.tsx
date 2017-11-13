import * as React from 'react';
import * as ProjectCard from '../AllProjectsPage/AllProjectsPage';
import * as ReactTestUtils from 'react-dom/test-utils';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import * as TestRenderer from 'react-test-renderer';
import * as test from 'tape';


class MyComponent extends React.Component {
  return (
<div>
<span> className="heading">Title</span>
    <Subcomponent foo="bar"/>
    </div>
);
}

test('----- React Component Tests: Button -----', (t) => {

  // Shallow rendering: Render React element only *one* level deep
  const component = createComponent.shallow(<MyComponent />);

  // Test component props and content
  t.equal(component.props.className, 'heading');
  t.equal(component.Subcomponent.foo, 'bar"');

  // Test rendered output
  const renderer = createRenderer();
  renderer.render(<MyComponent />);
  const result = renderer.getRenderOutput();
  t.jsxEquals(result, <div className="heading">share</div>);

  t.end();
});
