const GRAPH_TYPES = {
    TREE: 'tree',
    UND_SIMPLE: 'undirected simple',
    DIR_SIMPLE: 'directed simple',
    EDGE_WEIGHTED: 'edge weighted'
};

const CANVAS = {
    OFFSET: 10,
    HEIGHT: 600,
    WIDTH: 700,
    USABLE_HEIGHT: 580,
    USABLE_WIDTH: 680
};

const COLORS = {
    BLACK: "#000000",
    RED: "#ff1c1c",
    BLUE: "#16a6ff",
    GREEN: "#06b45a",
    YELLOW: "#ffd11c",
    WHITE: "#FFFFFF",
    ORANGE: "#ff7c1e",
};

const STATE_PROPERTIES = {
    GRAPH_TYPE: 'graph_type',
    BRANCHING_FACTOR: 'branching_factor',
    DEPTH: 'depth',
    DENSITY: 'density',
    SPEED: 'speed',
    NODE_SIZE: 'node_size',
}

const STOPPING_PROPERTIES = [
    STATE_PROPERTIES.GRAPH_TYPE,
    STATE_PROPERTIES.BRANCHING_FACTOR,
    STATE_PROPERTIES.DEPTH,
    STATE_PROPERTIES.DENSITY
];

const TREE_ALGORITHMS = {
    bfs: {
        name: "Breadth First Search",
        animator: animators.tree.bfs
    },
    dfs: {
        name: "Depth First Search",
        animator: animators.tree.dfs
    }
};
