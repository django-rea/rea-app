import React from 'react';
import sdfsdfProjectCard from '../AllProjectsPage/AllProjectsPage';
//import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
//import TestRenderer from 'react-test-renderer';
import * as test from "tape";

//const renderer = new ShallowRenderer();
//renderer.render(<ProjectCard />);
//const result = renderer.getRenderOutput();

//console.log(result);
//console.log(result.type);
//console.log(result.props);
//console.log(result.props.children);

test("Simple math test", (t) => {
    t.equal(4, 2 + 2);
    t.true(5 > 2 + 2);
    t.end();
});
