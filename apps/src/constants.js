const GRAPH_TYPES = {
    TREE: 'tree',
    UND_SIMPLE: 'und_simple',
    DIR_SIMPLE: 'dir_simple',
    EDGE_WEIGHTED: 'edge_weighted'
};

const CANVAS = {
    OFFSET: 10,
    HEIGHT: 600,
    WIDTH: 700,
    USABLE_HEIGHT: 580,
    USABLE_WIDTH: 680
};

const COLORS = {
    BLACK: '#000000',
    RED: '#FF1C1C',
    BLUE: '#16A6FF',
    GREEN: '#06B45A',
    YELLOW: '#FFD11C',
    WHITE: '#FFFFFF',
    ORANGE: '#FF7C1E',
};

const STATE_PROPERTIES = {
    GRAPH_TYPE: 'graph_type',
    BRANCHING_FACTOR: 'branching_factor',
    DEPTH: 'depth',
    DENSITY: 'density',
    SPEED: 'speed',
    NODE_SIZE: 'node_size',
    CURRENTLY_ANIMATING: 'currently_animating'
}

const STOPPING_PROPERTIES = [
    STATE_PROPERTIES.GRAPH_TYPE,
    STATE_PROPERTIES.BRANCHING_FACTOR,
    STATE_PROPERTIES.DEPTH,
    STATE_PROPERTIES.DENSITY
];

const ALGORITHMS = {
    [GRAPH_TYPES.TREE]: {
        bfs: {
            name: "Breadth First Search",
            animator: animators.bfs
        },
        dfs: {
            name: "Depth First Search",
            animator: animators.dfs
        }
    },
    [GRAPH_TYPES.UND_SIMPLE]: {
        bfs: {
            name: 'Breadth First Search',
            animator: animators.bfs
        },
        dfs: {
            name: 'Depth First Search',
            animator: animators.dfs
        }
    }
};
