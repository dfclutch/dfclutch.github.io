const Graph = {
  /* Internal graph representation */
  _graph: {
    matrix: [],
    nodeColors: [],
    nodeRadii: []
  },
  addNode: (color = 'black', radius = 2) => {
    _graph.nodeColors.push(color);
    _graph.nodeRadii.push(radius);

  }
};

const sizeInputElement = document.getElementById("sizeInput");
const nodesInputElement = document.getElementById("nodesInput");
const generateErdosElement = document.getElementById("generateErdos");
const generateHubElement = document.getElementById("generateHub");
const generateScaleFreeElement = document.getElementById("generateScaleFree");
const renderAreaElement = document.getElementById("renderArea");
const currentGraphTypeElement = document.getElementById("currentGraphType");
const textOutputElement = document.getElementById("textOutput");

/*	
  Call as the first step of generating any new graph 
  - stops simulation
  - clears SVG from page
  - clears graph object
*/
function clearForGraphGeneration() {
  if(simulation) simulation.stop()
  d3.selectAll("svg").remove()
  graph = {
    nodes: [],
    links: []
  }
  updateCurrentGraphTextOutput();
  textOutputElement.innerHTML = ""
}

function generateErdos() {
    clearForGraphGeneration();
    erdosRenyi();
    run();
}

function generateHub() { 
  clearForGraphGeneration();
  hubGraph(Math.floor(Math.sqrt(numNodes)/1.5), Math.floor(numNodes / Math.sqrt(numNodes)/1.5));
    run();
}

function generateScaleFree() {
    clearForGraphGeneration();
    scaleFree();
    run();
}

const GRAPH_GENERATORS = [
  generateErdos,
  generateHub,
  generateScaleFree
];

const GRAPH_NAMES = [
  "Erdős-Renyi",
  "Hub Graph",
  "Scale-Free"
]

const GRAPH_TYPES = {
  ERDOS: 0,
  HUB: 1,
  SF: 2
};

let renderAreaRect = renderAreaElement.getBoundingClientRect();

let sizeOffset = 15;
let width = window.innerWidth - sizeOffset;
let height = window.innerHeight - renderAreaRect.top - window.scrollY;
let radius=5;
let numNodes=200;

sizeInputElement.value = Math.floor(width);
nodesInputElement.value = numNodes;

let currentGraphType = GRAPH_TYPES.SF;
updateCurrentGraphTextOutput()


let graph = {
  nodes: [],
  links: []
}

/*
  Creates a basic Erdos-Renyi graph using numNodes as the number of nodes and
  1.5/numNodes as probability parameter ps
*/
function erdosRenyi() {
  radius=2;
  radiusIncrease = .5;

  for(let i=0; i<numNodes; i++) {
    graph.nodes.push({
      color: chance.color(20),
      r: radius,
      friends: 0
    })
  }

/*
  erdos-renyi selection of links
  p is probability node_i connected to node_j
*/
  const p = 1.5/numNodes;
  for (let i=0;i<numNodes;i++) {
    for(let j=0;j<numNodes;j++) {
      if (i==j) {continue}

      if(Math.random() < p) {
        graph.nodes[i].friends = graph.nodes[i].friends + 1;
        graph.nodes[j].friends = graph.nodes[j].friends + 1;
        graph.nodes[i].r = graph.nodes[i].r + radiusIncrease; //increase for outlinks
        graph.links.push({
          source: graph.nodes[i],
          target: graph.nodes[j]
        })
      }

    }
  }
}


/*
  creates a graph with {hubs} number of hub nodes, each with an average number of 
  connected nodes equal to {friends}
*/
function hubGraph(hubs, avgFriends) {
  radius=5;
  let hubList = [];
  let friendsList = []
  for(let i=0; i<hubs; i++) {
    let hubColor = "#000";//chance.color(50);
    let numberFriends = chance.between(avgFriends/2, avgFriends*2);
    let friendColor = chance.color(50);

    let hubNode = {
      color: hubColor,
      r: radius * 2,
      friends: Math.floor(numberFriends)
    };

    graph.nodes.push(hubNode)
    hubList.push(hubNode);

    let closeFriendsList = []
    for(let j=0; j<numberFriends; j++) {
      friendNode = {
        color: friendColor,
        r: radius,
        friends: 1
      }
      graph.nodes.push(friendNode);
      friendsList.push(friendNode);
      closeFriendsList.push(friendNode);

      graph.links.push({source: hubNode, target: friendNode});
    }

    //erdos renyi all the friends together, pretty densely
    for(let k=0; k<closeFriendsList.length; k++) {
      for(let l=0; l<closeFriendsList.length; l++) {
        if (k==l) continue;
        if(Math.random() < 2/(closeFriendsList.length)) {
          closeFriendsList[k].friends = closeFriendsList[k].friends + 1;
          closeFriendsList[l].friends = closeFriendsList[l].friends + 1;
          graph.links.push({
            source: closeFriendsList[k],
            target: closeFriendsList[l]
          })
        }
      }
    }
  }

  //erdos renyi the hubs together
  for(let i=0; i<hubs; i++) {
    for(let j=0; j<hubs; j++) {
      if (i==j) continue;
      if(Math.random() < 2/(hubs)) {
        hubList[i].friends = hubList[i].friends + 1
        hubList[j].friends = hubList[j].friends + 1
        graph.links.push({
          source: hubList[i],
          target: hubList[j]
        })
      }
    }
  }
  //erdos renyi all the friends together, but make it sparse
  for(let i=0; i<friendsList.length; i++) {
    for(let j=0; j<friendsList.length; j++) {
      if (i==j) continue;
      if(Math.random() < 1/(friendsList.length*avgFriends/1.5)) {
        friendsList[i].friends = friendsList[i].friends + 1
        friendsList[j].friends = friendsList[j].friends + 1
        graph.links.push({
          source: friendsList[i],
          target: friendsList[j]
        })
      }
    }
  }
}

/*	
  Generates a scale-free graph based on the "rich get richer" property proposed by
  Barabasi and Albert
*/
function scaleFree() {
  radius=3
  const radiusIncrease = .25;
  /*
    this array contains duplicates of each node, a duplicate added
    each time a node gets a new link - rich get richer
  */
  let firstNode = {
    color: chance.color(50),
    r: radius,
    friends: 0
  }
  weightedNodeArray = [firstNode];
  graph.nodes.push(firstNode)
  for(let i=0; i<numNodes; i++) {
    let newNode = {
        color: chance.color(50),
        r: radius,
      friends: 1
      };

    let targetNode = chance.oneOf(weightedNodeArray);
    weightedNodeArray.push(targetNode);
    targetNode.r = targetNode.r + radiusIncrease;
    targetNode.friends = targetNode.friends + 1;
    graph.links.push({
      source: newNode,
      target: targetNode
    });

    graph.nodes.push(newNode)
    weightedNodeArray.push(newNode)
  }

  //find node with most friends:
  let maxFriends = 0;
  let maxNode;
  graph.nodes.forEach(node => {
    if (node.friends > maxFriends) {
      maxFriends = node.friends;
      maxNode = node
    }
  });
  let outputHTML = `Most popular node has: <strong style="color: ${maxNode.color}">${maxFriends} friends</strong>`;
  textOutputElement.innerHTML = outputHTML;
}

/*
  Dragging behavior for simulation
*/
const drag = simulation => {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  
  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }
  
  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    d.fixed = true;
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}

/*
  Main function go generate and run a simulation
  - simulation is declared outside the function to have global scope and
  allow for stopping in other areas
*/
let simulation;
function run() {
  let svg = d3.select("#renderArea").append("svg")
    .attr("width", width)
    .attr("height", height);

  simulation = d3.forceSimulation(graph.nodes)
    .force("charge", d3.forceManyBody().strength((d) => {
      return -1 * d.friends * (2*width/numNodes)
    }))
    .force("center", d3.forceCenter(width/2, height/2))
    .force("link", d3.forceLink(graph.links))
    .force("collide", d3.forceCollide((d) => {return d.r}).strength(1));
  

  let link = svg.append("g")
    .attr("class", "edge")
    .selectAll("line")
    .data(graph.links)
    .join("line")
    .attr("stroke", "#555");

  let node = svg.append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .join("circle")					
    .attr("fill", (d) => {return d.color})
    .attr("r", (d) => {return d.r});

  simulation.on("tick", ticked)

  node.call(drag(simulation))

  function ticked() {
      link
        .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      // bound positions of nodes within svg
      node.attr("cx", function(d) { return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); })
          .attr("cy", function(d) { return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); });
  }
}

/*
  HTML event handlers
*/
nodesInputElement.onkeyup = () => {
  numNodes = parseInt(nodesInputElement.value);
  GRAPH_GENERATORS[currentGraphType]();
}
sizeInputElement.onkeyup = () => {
  width = height = Math.max(50, parseInt(sizeInputElement.value));
  GRAPH_GENERATORS[currentGraphType]();
}
generateErdosElement.onclick = () => {
  currentGraphType = GRAPH_TYPES.ERDOS;
  updateCurrentGraphTextOutput()
  GRAPH_GENERATORS[GRAPH_TYPES.ERDOS]();
}
generateHubElement.onclick = () => {
  currentGraphType = GRAPH_TYPES.HUB;
  updateCurrentGraphTextOutput()
  GRAPH_GENERATORS[GRAPH_TYPES.HUB]();
}
generateScaleFreeElement.onclick = () => {
  currentGraphType = GRAPH_TYPES.SF;
  updateCurrentGraphTextOutput()
  GRAPH_GENERATORS[GRAPH_TYPES.SF]();
}
function updateCurrentGraphTextOutput() {
  currentGraphTypeElement.innerHTML = `Graph generated with the ${GRAPH_NAMES[currentGraphType]} model`;
}

window.onresize = () => {
  width = window.innerWidth - sizeOffset;
  height = window.innerHeight - renderAreaRect.top;
  sizeInputElement.value = Math.floor(width);
  GRAPH_GENERATORS[currentGraphType]();
}

window.onload = () => {
  GRAPH_GENERATORS[currentGraphType]();
}