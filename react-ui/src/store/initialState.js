import { dehydrate, rehydrate } from './hydration'

window.dehydrate = dehydrate

const initialState = {
  'sortableTree': {
    'root': [
      'axes',
      'mainFolder'
    ],
    'axes': [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6'
    ],
    'mainFolder': []
  },
  'folders': {
    'axes': {
      'isCollapsed': true,
      'isDropDisabled': true,
      'isDragDisabled': true,
      'description': 'Axes and Grids'
    },
    'mainFolder': {
      'description': 'A Folder'
    }
  },
  'mathSymbols': {},
  'mathGraphics': {
    '1': {
      'type': 'AXIS',
      'label': 'x'
    },
    '2': {
      'type': 'AXIS',
      'label': 'y',
      'axis': 'y'
    },
    '3': {
      'type': 'AXIS',
      'label': 'z',
      'axis': 'z',
      'scale': '1/2'
    },
    '4': {
      'type': 'GRID',
      'axes': 'xy'
    },
    '5': {
      'type': 'GRID',
      'visible': false,
      'axes': 'yz'
    },
    '6': {
      'type': 'GRID',
      'visible': false,
      'axes': 'zx'
    }
  }
}

export default rehydrate(initialState)
