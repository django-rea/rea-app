import * as React from "react";
import * as ProjectCard from "../AllProjectsPage/AllProjectsPage";
import * as ReactTestUtils from "react-dom/test-utils";
import * as ShallowRenderer from "react-test-renderer/shallow";
import * as TestRenderer from "react-test-renderer";
import * as test from "tape";
import {AllOrgsType} from "../../../ui-bindings/agent/allOrganizations";

test("A passing test.", (assert) => {

  assert.pass("This test will pass.");

  assert.end();
});

test("Project Card", (assert) => {

  // const i = 0;
  //
  // const renderer = new ShallowRenderer;
  // renderer.render(<ProjectCard theme={""} org={org} i={i}/>);
  // const result = renderer.getRenderOutput();
  // assert.equal(org.image, "");
});
