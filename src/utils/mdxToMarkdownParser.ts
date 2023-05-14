function parseMDXtoMD(content: string) {
  content = content.replace(/import.*from.*;/g, '');
  content = content.replace(/export.*default.*;/g, '');

  const start = content.indexOf('---');
  const end = content.indexOf('---', start + 3) + 3;

  content = content.replace(content.slice(start, end), '');

  while (content.includes('<Image')) {
    const start = content.indexOf('<Image');
    const end = content.indexOf('/>', start) + 2;

    const image = content.slice(start, end);
    const src = image.match(/src=".*"/g)[0].slice(5, -1);
    const alt = image.match(/description=".*"/g) ? image.match(/description=".*"/g)[0].slice(5, -1) : null;

    const newImage = `![${alt ?? '-'}](${src})`;

    content = content.replace(image, newImage);
  }

  while (content.includes('**')) {
    const start = content.indexOf('**');
    const end = content.indexOf('**', start + 2) + 2;

    const text = content.slice(start, end);
    const newText = text.replace(/\*\*/g, '*');

    content = content.replace(text, newText);
  }
  console.log(content);
  return content;
}

parseMDXtoMD(`

`);
