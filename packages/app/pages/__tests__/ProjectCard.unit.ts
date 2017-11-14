import React from 'react';
import ProjectCard from '../AllProjectsPage/AllProjectsPage';
import ShallowRenderer from 'react-test-renderer/shallow';
import test from 'tape';

function shallowRenderProjectCard(i) {
    const renderer = TestUtils.createRenderer();
    const fn = () => {};
    renderer.render(
        <ProjectCard i={id}/>
    );
    return renderer.getRenderOutput();
}

test('ProjectCard component', (t) => {
    t.test('rendering first card', (t) => {
        const result = shallowRenderProjectCard(0);
        t.test('join button is rendered', (t) => {
            t.plan(1);
            t.true(result.props.children[0].props.has('<button>'));
        });
        t.test('The name of the project is rendered', (t) => {
            t.plan(1);
            t.equal(result.props.children[1].props.children, 'Eaton');
        });
        t.test('An image is rendered', (t) => {
            t.plan(1);
            t.true(result.props.children[2].props.has('<img>'));
        });
    });
    
    t.test('rendering second card', (t) => {
        const result = shallowRenderProjectCard(1);
        t.test('join button is rendered', (t) => {
            t.plan(1);
            t.true(result.props.children[0].props.has('<button>'));
        });
        t.test('The name of the project is rendered', (t) => {
            t.plan(1);
            t.equal(result.props.children[1].props.children, 'School District of South Milwaukee');
        });
        t.test('An image is rendered', (t) => {
            t.plan(1);
            t.true(result.props.children[2].props.has('<img>'));
        });
    });
});
