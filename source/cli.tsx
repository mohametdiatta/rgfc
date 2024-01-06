#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ rgfc

	Options
		--component component-name
		-c component-name

	Examples
	  $ rgfc -c component-name
`,
	{
		importMeta: import.meta,
		flags: {
			component: {
				type: 'string',
				alias: 'c',
			},
			hook: {
				type: 'boolean',
				alias: 'h',
			},
		},
	},
);

render(<App component={cli.flags.component} hook={cli.flags.hook} />);
