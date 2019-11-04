const MAX_FLOW_CAP = 15;
let MAX_NUM_NODES = 12 * 12;
const EDGE_WEIGHT_REDUCTION_FACTOR = 2;
const EDGE_ARROW_ANGLE = 15;
const EDGE_ARROW_LENGTH = 10;

const NO_ACTION = 'This Does Nothing';

const GRAPH_TYPES = {
    TREE: 'tree',
    UND_SIMPLE: 'und_simple',
    DIR_SIMPLE: 'dir_simple',
    NETWORK_FLOW: 'network_flow',
    COMPLETE: 'complete',
    NICE: 'nice'
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
};

const STOPPING_PROPERTIES = [
    STATE_PROPERTIES.GRAPH_TYPE,
    STATE_PROPERTIES.BRANCHING_FACTOR,
    STATE_PROPERTIES.DEPTH
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
        },
        a_star: {
            name: "A* [beta]",
            animator: animators.a_star
        }
    }, [GRAPH_TYPES.UND_SIMPLE]: {
        bfs: {
            name: 'Breadth First Search',
            animator: animators.bfs
        },
        dfs: {
            name: 'Depth First Search',
            animator: animators.dfs
        },
        greedy: {
            name: "Greedy Search",
            animator: animators.greedy_search
        },
        a_star: {
            name: "A* [beta]",
            animator: animators.a_star
        },
        prim_euclid: {
            name: "Prim MST",
            animator: animators.prim_euclid
        }
    },[GRAPH_TYPES.DIR_SIMPLE]: {
        bfs: {
            name: 'Breadth First Search',
            animator: animators.bfs
        },
        dfs: {
            name: 'Depth First Search',
            animator: animators.dfs
        },
        greedy: {
            name: "Greedy Search",
            animator: animators.greedy_search
        },
        a_star: {
            name: "A* [beta]",
            animator: animators.a_star
        },
        prim_euclid: {
            name: "Prim MST",
            animator: animators.prim_euclid
        }
    }, [GRAPH_TYPES.NETWORK_FLOW]: {
        ford_fulkerson: {
            name: 'Ford Fulkerson',
            animator: animators.ford_fulkerson
        },
        live_network: {
          name: 'Live Network',
          animator: animators.live_network
        },
        dfs: {
            name: 'Breadth First Search',
            animator: animators.bfs
        }
    },
    [GRAPH_TYPES.COMPLETE]: {
        prim_euclid: {
            name: 'Min Spanning Tree',
            animator: animators.prim_euclid
        }
    }
};
