import React from 'react';
import {createDevTools} from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

import LogMonitor from 'redux-devtools-log-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import Dispatch from 'redux-devtools-dispatch';


export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w"
               defaultIsVisible={true}>
    <MultipleMonitors>
      <LogMonitor />
      <ChartMonitor />
      <Dispatch />
    </MultipleMonitors>
  </DockMonitor>
);
