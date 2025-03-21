import type { Types } from '@cornerstonejs/core';
import {
  RenderingEngine,
  Enums,
  getRenderingEngine,
} from '@cornerstonejs/core';
import {
  initDemo,
  createImageIdsAndCacheMetaData,
  setTitleAndDescription,
  addButtonToToolbar,
  addDropdownToToolbar,
  getLocalUrl,
} from '../../../../utils/demo/helpers';
import * as cornerstoneTools from '@cornerstonejs/tools';

// This is for debugging purposes
console.warn(
  'Click on index.ts to open source code for this example --------->'
);

const { ViewportType, Events } = Enums;

// ======== Constants ======= //
const renderingEngineId = 'myRenderingEngine';
const viewportId = 'CT_STACK';

// Get the rendering engine
let renderingEngine, viewport;

import {
  PanTool,
  ZoomTool,
  ToolGroupManager,
  Enums as csToolsEnums,
} from '@cornerstonejs/tools';

const { MouseBindings } = csToolsEnums;

const toolGroupId = 'STACK_POSITION_TOOL_GROUP';

// ======== Set up page ======== //
setTitleAndDescription(
  'Stack Position',
  'Demonstrates how to use the display area with rotation and flip'
);

const content = document.getElementById('content');
const element = document.createElement('div');
element.id = 'cornerstone-element';
element.style.width = '1000px';
element.style.height = '500px';

content.appendChild(element);

const info = document.createElement('div');
content.appendChild(info);

const displayAreaInfo = document.createElement('div');
info.appendChild(displayAreaInfo);

const rotationInfo = document.createElement('div');
info.appendChild(rotationInfo);

const flipHorizontalInfo = document.createElement('div');
info.appendChild(flipHorizontalInfo);

element.addEventListener(Events.CAMERA_MODIFIED, (_) => {
  // Get the rendering engine
  const renderingEngine = getRenderingEngine(renderingEngineId);

  // Get the stack viewport
  const viewport = renderingEngine.getViewport(
    viewportId
  ) as Types.IStackViewport;

  if (!viewport) {
    return;
  }

  const { flipHorizontal } = viewport.getCamera();
  const { rotation } = viewport.getViewPresentation();

  rotationInfo.innerText = `Rotation: ${Math.round(rotation)}`;
  flipHorizontalInfo.innerText = `Flip horizontal: ${flipHorizontal}`;
  displayAreaInfo.innerText = `DisplayArea: ${JSON.stringify(displayArea)}`;
});

function createDisplayArea(
  size,
  pointValue,
  canvasValue = pointValue,
  rotation = 0,
  flipHorizontal = false
) {
  const imagePoint = Array.isArray(pointValue)
    ? pointValue
    : [pointValue, pointValue];
  const canvasPoint = Array.isArray(canvasValue)
    ? canvasValue
    : [canvasValue, canvasValue];
  return {
    rotation,
    flipHorizontal,
    displayArea: {
      imageArea: Array.isArray(size) ? size : [size, size],
      imageCanvasPoint: {
        imagePoint,
        canvasPoint,
      },
      // storeAsInitialCamera: true,
    },
  };
}

const displayAreas = new Map();
displayAreas.set('Center with border', createDisplayArea(1.1, 0.5));
displayAreas.set('Center Full', createDisplayArea(1, 0.5));
displayAreas.set('Center Half', createDisplayArea(2, 0.5));
displayAreas.set('Left Top', createDisplayArea(1, 0));
displayAreas.set('Right Top', createDisplayArea(1, [1, 0]));
displayAreas.set('Center Left/Top', createDisplayArea(2, 0, 0.5));
displayAreas.set('Center Right/Bottom', createDisplayArea(2, 1, 0.5));
displayAreas.set('Left Top', createDisplayArea(1, 0));
displayAreas.set('Left Bottom', createDisplayArea(1, [0, 1]));
displayAreas.set('Right Bottom', createDisplayArea(1, [1, 1]));
displayAreas.set(
  'Left Top Half 2, 0.1',
  createDisplayArea([2, 0.1], 0, undefined)
);
displayAreas.set(
  'Left Top Half 0.1, 2',
  createDisplayArea([0.1, 2], 0, undefined)
);
displayAreas.set('Left Top Half 2,2', createDisplayArea(2, 0, undefined));
displayAreas.set('Right Top Half', createDisplayArea([0.1, 2], [1, 0]));
displayAreas.set('Left Bottom Half', createDisplayArea(2, [0, 1]));
displayAreas.set('Right Bottom Half', createDisplayArea(2, [1, 1]));
displayAreas.set(
  '90 Left Top Half',
  createDisplayArea([2, 0.1], 0, undefined, 90, false)
);
displayAreas.set(
  '180 Right Top Half',
  createDisplayArea([0.1, 2], [1, 0], undefined, 180, false)
);
displayAreas.set(
  'Flip Left Bottom Half',
  createDisplayArea(2, [0, 1], undefined, 0, true)
);
displayAreas.set(
  'Flip 180 Right Bottom Half',
  createDisplayArea(2, [1, 1], undefined, 180, true)
);

let displayArea = 'none';

addDropdownToToolbar({
  options: {
    values: [...displayAreas.keys()],
    defaultValue: displayAreas.keys().next().value,
  },
  onSelectedValueChange: (name) => {
    displayArea = displayAreas.get(name);
    viewport.setOptions(displayArea);
    viewport.setProperties(displayArea);
    const { flipHorizontal } = displayArea;
    viewport.setCamera({ flipHorizontal });
    viewport.render();
  },
});

addButtonToToolbar({
  title: 'Flip H',
  onClick: () => {
    // Get the rendering engine
    const renderingEngine = getRenderingEngine(renderingEngineId);

    // Get the stack viewport
    const viewport = renderingEngine.getViewport(
      viewportId
    ) as Types.IStackViewport;

    const { flipHorizontal } = viewport.getCamera();
    viewport.setCamera({ flipHorizontal: !flipHorizontal });

    viewport.render();
  },
});

addButtonToToolbar({
  title: 'Rotate Delta 30',
  onClick: () => {
    // Get the rendering engine
    const renderingEngine = getRenderingEngine(renderingEngineId);

    // Get the stack viewport
    const viewport = renderingEngine.getViewport(
      viewportId
    ) as Types.IStackViewport;

    const { rotation } = viewport.getViewPresentation();
    viewport.setViewPresentation({ rotation: rotation + 30 });

    viewport.render();
  },
});

addButtonToToolbar({
  title: 'Reset Viewport',
  onClick: () => {
    // Get the rendering engine
    const renderingEngine = getRenderingEngine(renderingEngineId);

    // Get the stack viewport
    const viewport = renderingEngine.getViewport(
      viewportId
    ) as Types.IStackViewport;

    // Resets the viewport's camera
    viewport.resetCamera();
    // Resets the viewport's properties
    viewport.resetProperties();
    viewport.render();
  },
});

function initializeTools() {
  cornerstoneTools.addTool(PanTool);
  cornerstoneTools.addTool(ZoomTool);

  // Create a tool group
  const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);

  toolGroup.addTool(PanTool.toolName);
  toolGroup.addTool(ZoomTool.toolName);

  // Set the initial state of the tools
  toolGroup.setToolActive(PanTool.toolName, {
    bindings: [
      {
        mouseButton: MouseBindings.Auxiliary, // Middle Click
      },
    ],
  });
  toolGroup.setToolActive(ZoomTool.toolName, {
    bindings: [
      {
        mouseButton: MouseBindings.Secondary, // Right Click
      },
    ],
  });

  return toolGroup;
}

/**
 * Runs the demo
 */
async function run() {
  // Init Cornerstone and related libraries
  await initDemo();

  // Initialize tools
  const toolGroup = initializeTools();

  // Get Cornerstone imageIds and fetch metadata into RAM
  const imageIds = await createImageIdsAndCacheMetaData({
    StudyInstanceUID:
      '1.3.6.1.4.1.14519.5.2.1.99.1071.55651399101931177647030363790032',
    SeriesInstanceUID:
      '1.3.6.1.4.1.14519.5.2.1.99.1071.11955901484749168523821342348553',
    wadoRsRoot:
      getLocalUrl() || 'https://d14fa38qiwhyfd.cloudfront.net/dicomweb',
  });

  // Instantiate a rendering engine
  renderingEngine = new RenderingEngine(renderingEngineId);

  // Create a stack viewport

  const viewportInput = {
    viewportId,
    type: ViewportType.STACK,
    element,
    defaultOptions: {
      background: [0.8, 0, 0.8] as Types.Point3,
    },
  };

  renderingEngine.enableElement(viewportInput);

  // Get the stack viewport that was created
  viewport = renderingEngine.getViewport(viewportId) as Types.IStackViewport;

  // Set the stack on the viewport
  await viewport.setStack(imageIds);

  // Render the image
  viewport.render();

  // Add tools to the tool group
  toolGroup.addViewport(viewportId, renderingEngineId);

  // Disable right click context menu
  element.oncontextmenu = (e) => e.preventDefault();

  // Add instructions
  const instructions = document.createElement('p');
  instructions.innerText = 'Middle Click: Pan\nRight Click: Zoom';
  content.appendChild(instructions);

  const svgNode = document.getElementsByClassName('svg-layer').item(0);
  const divNode = document.createElement('div');
  divNode.setAttribute(
    'style',
    'left:25%; top: 25%; width:25%; height:25%; border: 1px solid green; position: absolute'
  );
  svgNode.parentNode.insertBefore(divNode, svgNode.nextSibling);
  const div2Node = document.createElement('div');
  div2Node.setAttribute(
    'style',
    'left: 50%; top: 50%; width:25%; height:25%; border: 1px solid red; position: absolute'
  );
  divNode.parentNode.insertBefore(div2Node, divNode.nextSibling);
}

run();
