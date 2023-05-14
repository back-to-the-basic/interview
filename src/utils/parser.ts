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
    const alt = image.match(/alt=".*"/g)[0].slice(5, -1);
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

parseMDXtoMD(`---
title: 커널에 대해서 설명해주세요.
sidebar_position: 1
slug: kernel
---

자원에 접근하고 조작하는 기능, 프로그램이 올바르고 안전하게 실행되게 하는 기능이 운영체제의 핵심
서비스에 속한다.

어떤 커널을 사용하느냐에 따라서 실행하고 개발하는 프로그램이 하드웨어를 이용하는 양상이 달라지고,
결과적으로 컴퓨터 전체의 성능도 달라질 수 있다.

운영체제가 제공하는 서비스 중 커널에 포함되지 않는 서비스도 있는데 대표적으로 사용자 인터페이스가 있다.

## 커널의 역할

운영체제의 커널은 자원을 효율적으로 관리하기 위해서 CPU 스케줄링, 메모리 관리, 입출력관리,
파일 시스템 관리를 수행한다.

운영체제는 여러 프로그램이 동시에 실행될 수 있는 다중 프로그래밍 환경에서 동작한다.
각 프로그램들이 다른 프로그램 실행에 방해되거나 충돌이 발생하는 문제를 방지하기 위해
하드웨어에 대한 각종 보안법들을 필요로 한다.

이를 위해 운영체제는 사용자 모드(User Mode)와 커널 모드(Kernel Mode)가 제공되는
이중 동작 모드 기법을 사용한다.

## Reference

- 혼자 공부하는 운영체제
`);
