# Flux

이 글에서는 Flux 아키텍처가 무엇인지 알아봅니다.  
Facebook에서 작성한 [Flux 공식 문서](https://facebook.github.io/flux/)에 따르면 Flux는 다음과 같습니다.

> Application architecture for building user interfaces.

애플리케이션 아키텍처인 Flux를 이해하기 위해 Flux 아키텍처의 시작으로 돌아가보려고 합니다.

## MVC의 문제점

Flux는 기존 MVC 모델의 *복잡도*에서부터 시작되었습니다.

> **MVC** > **M**odel, **V**iew, **C**ontroller라는 영역으로 애플리케이션을 나누고 소프트웨어의 비즈니스 로직(Model)과 화면(View)을 구분하는데 중점을 두고 있는 패턴

![](https://velog.velcdn.com/images/hyunjine/post/a63b0478-c893-42f7-9a98-63ba5d6be6e7/image.png)

이런 MVC 패턴은 간단하고 작은 애플리케이션을 만드는데에는 문제가 없었습니다.

![](https://velog.velcdn.com/images/hyunjine/post/2513809e-50f6-4548-869a-c7df5d60521c/image.png)

애플리케이션의 규모가 커질수록 Model과 View는 많아집니다. Model이 업데이트되어서 View가 새로 그려질 수도 있고 View에 사용자와 상호작용이 발생하여 Model이 업데이트될 수도 있습니다.

![](https://velog.velcdn.com/images/hyunjine/post/704f62f6-93d3-48b2-9b02-768c29f3e666/image.png)

이러한 흐름에서 첫번째 문제는 코드의 실행흐름을 추적해야한다는 것입니다. MVC 패턴으로 만들어진 대규모 애플리케이션에 새로운 개발자가 투입된다면 코드베이스를 수정하기는 커녕 실행흐름만 따라다니면서 숨바꼭질을 하게됩니다.

![](https://velog.velcdn.com/images/hyunjine/post/08953fbb-5c34-4826-9f6b-0208b821fcc7/image.png)

더 심각해지면 기능을 추가했는데 추가한 기능이 애플리케이션 내에서 사이클을 만들어서 위와같이 계속 실행되는 무한 루프를 만들수도 있습니다. 이 경우 또한 무한 루프가 발생한 지점을 찾고 그 무한 루프를 끊어주기 위해 코드와 숨바꼭질을 해야합니다.

![](https://velog.velcdn.com/images/hyunjine/post/7c4a6e33-5d3b-4499-be3e-e30513a2de54/image.png)

상황을 간결하게 표현해보면 결국 Facebook이 겪었던 MVC 모델에서의 단점은 View 1에서의 변경사항이 Model을 변경하게되고 이 Model의 변경이 다른 View2를 업데이트 해줘야하는데 이는 애플리케이션의 복잡도를 증가시킨다는 것입니다.

## Flux

![](https://velog.velcdn.com/images/hyunjine/post/16101e46-f633-4902-90f3-b8352fe0a08b/image.png)

**Flux는 기존 MVC 모델의 복잡도를 해결하기 위해 설계되었습니다.**
먼저 새롭게 등장한 용어를 정리해보겠습니다.

- **Action**: 어떤 행동을 할지 나타내는 자바스크립트 객체입니다. "카운트를 1 증가시킨다", "상품을 카트에 추가한다"와 같은 행동이 액션입니다.(상태를 변경하려는 의도를 나타내는 객체) 액션을 Dispatch하면 액션이 스토어로 전달됩니다.
- **Dispatcher**: Action이 Store로 흐르도록 합니다. Action이 Store에 전달되면 Store가 가공을 끝낼 때까지 다른 Action을 Dispatch하지 못합니다.(동기적. Synchronous)
- **Store**: 애플리케이션의 전체 상태 트리를 저장하는 장소입니다. Dispatcher를 사용해서 전달된 Action을 받고 이를 기반으로 애플리케이션의 상태를 변화시킵니다. Store의 상태를 바꾸는 단 하나의 방법은 Action을 Dispatch하는 것 뿐입니다. 또한 MVC 모델에서 Model과 같은 역할을 합니다.
- **View**: HTML과 CSS로 만들어지는 결과물을 의미합니다.(UI)

용어들을 조합해보면, 애플리케이션에 Action이 들어오면 그 Action을 Store에 Dispatch하고 Store에 데이터가 업데이트되면 View를 리렌더링합니다.

즉, Flux에서의 데이터흐름은 단방향입니다.(Single Directional Data Flow)

![](https://velog.velcdn.com/images/hyunjine/post/f0f69ab6-2632-4873-ada4-25a885f7c82d/image.png)

View에서 또한 사용자의 Action을 시스템에 Dispatch 함으로써 Store를 업데이트하여 View를 리렌더링 할 수 있습니다.

Store가 바뀌면, 즉 상태가 변화하면 View를 리렌더링하는 것은 React의 선언적인 프로그래밍 스타일과도 일맥상통합니다. [React에서 View(=UI)는 상태에 기반한 스냅샷이기 때문입니다.](https://velog.io/@hyunjine/Thinking-in-React)

![](https://velog.velcdn.com/images/hyunjine/post/1ecf816b-4fde-4662-b86a-a6e57d662177/image.png)

좀 더 일반적으로 Flux의 다이어그램을 그려보면 Action에의해 Store들이 업데이트되고 그 업데이트가 View들에 전파되는 그림이 그려집니다. 이 다이어그램에서 화살표는 한 방향만을 가리킵니다.(Store, View가 많아져도 화살표 방향이 꼬이지 않음)

Flux 아키텍처로 만들어진 애플리케이션에서 새로운 개발자가 투입되면 Action의 시작점과 상태 업데이트가 어디서 일어나는지에 대해 설명해주면 애플리케이션을 빠르게 이해할 수 있습니다.

![](https://velog.velcdn.com/images/hyunjine/post/67d3022c-83fc-4967-8349-3dd7f31934de/image.png)

Flux 아키텍처로 애플리케이션을 만드는 것은 다양한 장점이 있습니다.

먼저 데이터를 일관되게 View에 표현할 수 있습니다.(data consistency)
View 1과 View 2가 같은 데이터를 사용하는데 데이터가 업데이트 되었는데 하나의 View만 업데이트되면 안됩니다. View 1과 View2가 같은 데이터를 사용하고 있으면 같은 상태를 화면에 보여줘야합니다.

다음으로 에러를 찾기 매우 쉽다는 것입니다.(easier to pinpoint root of a bug)
MVC 처럼 순환 경로를 따라가는 것이 아닌 한 방향으로 흐르는 코드의 흐름을 따라가다보면 에러를 빠르게 찾을 수 있습니다.

마지막으로 좀 더 의미있는 Unit Test를 작성할 수 있습니다.
모든 상태와 이 상태를 업데이트하는 로직이 같은 곳에 있기 때문에 그 모듈을 테스트할 때 State가 변하는 과정을 손쉽게 테스트할 수 있습니다.

![](https://velog.velcdn.com/images/hyunjine/post/b249f951-7e48-449a-a1f1-edee181ca27d/image.png)

Flux는 프레임워크가 아닌 패턴입니다.
Flux는 여러분의 데이터 모델을 예측 가능한 상태로 만들어주고 애플리케이션에서 어떤 일이 일어나고 있는지 쉽게 이해할 수 있게 해줍니다.

여기서 문제는 변경된 데이터를 감지하여 UI에 반영시킬 수 있어야한다는 것입니다. 이는 어려운 문제입니다.

![](https://velog.velcdn.com/images/hyunjine/post/b634ff9d-d0e5-4266-afa0-7fef5ca2f9db/image.png)

여기서 UI 라이브러리인 React가 나옵니다.
React는 분리된 데이터와 UI에 대하여 데이터가 변경되면 UI를 다시 그릴 수 있도록 해줍니다.

![](https://velog.velcdn.com/images/hyunjine/post/173d5d14-1cd8-469d-a07e-eddde61522d1/image.png)

이 과정은 마치 90년대에 데이터를 기반으로 서버에서 페이지를 만들어서 클라이언트에게 보냈던것을 클라이언트에서 하는 것과 같습니다.(데이터 변화에 따른 새로운 페이지 생성)

옛날에는 새로운 데이터가 업데이트되면 브라우저를 새로고침해서 서버로부터 데이터가 채워진 HTML을 받아와야 했습니다.(고전 웹, 서버 사이드 렌더링)

![](https://velog.velcdn.com/images/hyunjine/post/9fa13d03-bd46-477a-a1b3-f9e348f9a7ca/image.png)

React는 Flux 아키텍처에서 주요한 문제인 상태에 기반하여 뷰를 다시 그려야하는 부분을 다룹니다.

데이터가 변경되면 페이지를 새로고침해서 새로운 HTML을 받아와야 하는 것이 아닌 컴포넌트를 다시 그립니다.

![](https://velog.velcdn.com/images/hyunjine/post/608f01db-5714-4fcf-b507-81d9778793a4/image.png)

이는 마치 Restful API를 Client로 가져온 것과 같습니다.

Restful API에서 중요한 점은 Idempotency(멱등성)와 Referential Transparency(참조 투명성)입니다.

현대의 웹에서 우리가 특정 웹사이트 주소를 검색했을 때 항상 같은 응답이 돌아옵니다. 이를 **멱등성**이라고 합니다. 어디서 어떻게 실행하던 항상 같은 결과값을 주며 외부에 영향을 받지 않습니다.

또한 **참조 투명성**이란 동일한 입력을 받았을 때 동일한 출력을 하는 것을 말합니다.

Restful API는 이 두가지 조건을 만족하기 때문에 매우 예측 가능합니다.(Predictable)

이러한 특성을 클라이언트 사이드 애플리케이션(React)으로 가져와보면 동일한 데이터 입력에 대하여 동일한 UI를 출력하도록 합니다. 그리고 데이터가 변경되면 UI를 다시 그립니다.

fetch 요청을 통해 서버로부터 데이터를 받아와서 그리는 것 또한 마찬가지입니다. 서버사이드에서 페이지를 다시 만드는 것이 아닌, 클라이언트 사이드에서 변경된 UI를 다시 그립니다.

마치 90년대 서버 사이드에서 했던 것을 클라이언트 사이드에서 진행하는 것과 같습니다.

![](https://velog.velcdn.com/images/hyunjine/post/540ed021-d9f3-4d97-be18-34e2dff0d426/image.png)

브라우저의 DOM은 상태를 가지고 있기 때문에 클라이언트에서 DOM을 전부 다시 그리는 것은 많은 비용이듭니다. 브라우저는 DOM Node들은 계속적으로 만들고 다시 삭제하도록 디자인되지 않았습니다.

만약 사용자가 텍스트를 타이핑하거나 스크롤을 움직였을 때 DOM 전체를 날리고 다시 그린다면 전체 화면이 깜빡이는등 사용자의 경험에 영향을 미칩니다.

![](https://velog.velcdn.com/images/hyunjine/post/89c82681-79bd-4770-a040-9a1db7197563/image.png)

이를 해결하기위해 React에서는 VirtualDOM이라는 개념을 사용합니다.
React는 데이터가 바뀌면 VirtualDOM 트리를 다시 만듭니다. 그 다음 데이터가 바뀌기 전의 VirtualDOM 트리와 차이를 비교하여 바뀐 부분을 찾아내서 최소한의 DOM 수정(mutation)을 queue에 넣고 batch 시켜서 한번에 UI를 업데이트 시킵니다.(DOM Node의 속성만 바뀐다면 속성만 업데이트 시킴)

DOM을 수정하는 작업은 UI Engineering에서 매우 어려운 부분입니다.

```js
freindList.childNodes[0].textContent = "hyunjin"
freindList.childNodes[2].className = "active"
```

위와 같이 데이터에 기반하여 UI에 어떻게 보여져야하는지 DOM을 수정하는 작업은 React가 대신합니다.
복잡성을 React라는 라이브러리에 숨김으로써 라이브러리의 사용자는 UI의 변화를 손쉽게 처리할 수 있습니다.

지금까지 React를 예로 들어서 Flux 아키텍처에서 Model이 View에 반영되는 과정을 살펴보았습니다.

![](https://velog.velcdn.com/images/hyunjine/post/d214ec34-bf57-417a-a3e9-fa0ae41cea96/image.png)

마지막으로 정리해보겠습니다.

Flux는 아키텍처입니다. 아키텍처이기 때문에 애플리케이션에 녹아있습니다.
Flux는 기존 MVC 모델의 복잡도를 데이터를 정해진 곳에서 업데이트하고 그 데이터를 View가 렌더링하는 방식으로 해결했습니다.(unidirectional) 이 때 바뀐 데이터를 View에 반영하는 것이 어렵기 때문에 라이브러리인 React를 사용합니다.

## 생각

React 생태계에 녹아있는 아키텍처인 Flux를 이해하는 것은 중요하다고 생각합니다. Flux 아키텍처를 이해함으로써 React를 이해하는데 필요한 멘탈 모델을 더 단단하게 구축할 수 있습니다.

Flux는 결국 MVC의 변형입니다. Model == Store, View, Controller == Dispatcher.
MVC 아키텍처에서 View가 Model과 상호작용할 수 있었던 것을 Model -> View인 단방향으로 만들었을 뿐입니다.

이렇게 함으로써 Flux는 MVC 아키텍처와 다르게 중첩된 업데이트(nested updates)를 방지하고 연쇄적인 효과(cascading effects)를 피합니다.
