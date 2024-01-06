import fs from 'fs';
import path from 'path';

export const genrateComponent = (c_name: string) => {
	const segments = c_name?.split?.('/');
	const lastSegment = segments?.pop() as string;
	let directory = segments?.filter(s => s !== lastSegment)?.join('/');
	const r_name = lastSegment?.replaceAll(' ', '');
	const fileName = `${r_name}.tsx`;
	const filePath = path.join(directory, fileName);
	if (!directory) {
		directory = process.cwd();
	}
	fs.mkdir(directory, {recursive: true}, function (err) {
		if (err) throw err;
		fs.writeFile(filePath, generateCode(lastSegment), function (err) {
			if (err) throw err;
		});
	});
	return true;
};

const generateCode = (r_name: string) => {
	const name = capitalize(
		r_name?.replace(/-./g, match => match.charAt(1)?.toUpperCase()),
	);
	let codeStr = `import React from 'react'\n
      function ${name}() { \n
      return (<div>${name}</div>)\n
   }\n
   export default ${name}\n
   `;
	return codeStr;
};

function capitalize(str: string) {
	if (typeof str !== 'string' || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}
