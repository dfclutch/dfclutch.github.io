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

const STOPPING_PROPERTIES = [
    'graph_type',
    'branching_factor',
    'depth',
    'density'
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
