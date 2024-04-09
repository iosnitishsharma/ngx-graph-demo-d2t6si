import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'first',
    label: 'A',
  },
  {
    id: 'second',
    label: 'B',
  },
  {
    id: 'third',
    label: 'C',
  },
  {
    id: 'fourth',
    label: 'D',
  },
  {
    id: 'fifth',
    label: 'E',
  },
  {
    id: 'sixth',
    label: 'F',
  },
  {
    id: 'seventh',
    label: 'G',
  },
  {
    id: 'eighth',
    label: 'H',
  },
  {
    id: 'ninth',
    label: 'I',
  },
  {
    id: 'tenth',
    label: 'J',
  },
];

export const clusters: ClusterNode[] = [
  {
    id: 'section1',
    label: 'S1',
    childNodeIds: ['first'],
  },
  {
    id: 'section2',
    label: 'S2',
    childNodeIds: ['second', 'third','fourth','fifth'],
  },
  {
    id: 'section3',
    label: 'S3',
    childNodeIds: ['sixth'],
  },
  {
    id: 'section4',
    label: 'S4',
    childNodeIds: ['seventh', 'eighth','ninth'],
  },
  {
    id: 'section5',
    label: 'S5',
    childNodeIds: ['tenth'],
  },
];

export const links: Edge[] = [
  {
    id: 'e1',
    source: 'first',
    target: 'second',
    label: 'is parent of',
  },
  {
    id: 'e2',
    source: 'second',
    target: 'third',
    label: 'custom label',
  },
  {
    id: 'e3',
    source: 'third',
    target: 'fourth',
    label: 'custom label',
  },
  {
    id: 'e4',
    source: 'third',
    target: 'fifth',
    label: 'custom label',
  },
  {
    id: 'e5',
    source: 'fourth',
    target: 'sixth',
    label: 'custom label',
  },
  {
    id: 'e6',
    source: 'fifth',
    target: 'sixth',
    label: 'custom label',
  },
  {
    id: 'e7',
    source: 'sixth',
    target: 'seventh',
    label: 'custom label',
  },
  {
    id: 'e8',
    source: 'seventh',
    target: 'eighth',
    label: 'custom label',
  },
  {
    id: 'e9',
    source: 'eighth',
    target: 'sixth',
    label: 'custom label',
  },
  {
    id: 'e10',
    source: 'eighth',
    target: 'ninth',
    label: 'custom label',
  },
  {
    id: 'e11',
    source: 'ninth',
    target: 'tenth',
    label: 'custom label',
  }
];
