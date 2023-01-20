import React, { useState } from "react";
import "./Build.css";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import { phpGenerator } from "blockly/php";
import { luaGenerator } from "blockly/lua";
import { dartGenerator } from "blockly/dart";

const Build = () => {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  const [dartCode, setDartCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
          {
            kind: "block",
            type: "logic_operation",
          },
          {
            kind: "block",
            type: "logic_negate",
          },
          {
            kind: "block",
            type: "logic_boolean",
          },
        ],
      },
      {
        kind: "category",
        name: "Loops",
        categorystyle: "loop_category",
        contents: [
          {
            kind: "block",
            type: "controls_repeat_ext",
            inputs: {
              TIMES: {
                block: {
                  type: "math_number",
                  fields: {
                    NUM: 10,
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "controls_whileUntil",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        categorystyle: "math_category",
        contents: [
          {
            kind: "block",
            type: "math_number",
            fields: {
              NUM: 123,
            },
          },
          {
            kind: "block",
            type: "math_arithmetic",
          },
          {
            kind: "block",
            type: "math_single",
          },
        ],
      },
      {
        kind: "category",
        name: "Text",
        categorystyle: "text_category",
        contents: [
          {
            kind: "block",
            type: "text",
          },
          {
            kind: "block",
            type: "text_length",
          },
          {
            kind: "block",
            type: "text_print",
          },
        ],
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const jscode = javascriptGenerator.workspaceToCode(workspace);
    const pycode = pythonGenerator.workspaceToCode(workspace);
    const dartcode = dartGenerator.workspaceToCode(workspace);
    setJavascriptCode(jscode);
    setPythonCode(pycode);
    setDartCode(dartcode);
  }

  return (
    <>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      {/* <pre id="generated-xml">{xml}</pre> */}
      <h6>JavaScript</h6>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={javascriptCode}
        readOnly
      ></textarea>
      <h6>Python</h6>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={pythonCode}
        readOnly
      ></textarea>
      <h6>Dart</h6>
      <textarea
        id="code"
        style={{ height: "200px", width: "400px" }}
        value={dartCode}
        readOnly
      ></textarea>
    </>
  );
};

export default Build;
