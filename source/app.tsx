import React, {useEffect, useState} from 'react';
import {Text} from 'ink';
import {genrateComponent} from './utils/index.js';

type Props = {
	component: string | undefined;
	hook: boolean | undefined;
};

export default function App(props: Props) {
	const [created, setCreated] = useState(false);
	useEffect(() => {
		if (props?.component)
			setCreated(genrateComponent(props.component as string));
	}, [props]);
	return (
		<Text>
			{created ? (
				<Text color="green"> Components {props.component} Created </Text>
			) : props?.component ? (
				<Text color="red"> Error when creating components </Text>
			) : (
				<Text color="yellow">
					You must provide component name Ex:
					<Text color="gray"> $ rgfc -c component-name</Text>
				</Text>
			)}
		</Text>
	);
}
