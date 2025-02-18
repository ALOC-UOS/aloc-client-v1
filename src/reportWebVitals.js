const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // getCLS란 Cumulative Layout Shift의 약자로, 레이아웃이 얼마나 불안정한지를 측정하는 지표입니다.
      getFID(onPerfEntry); // getFID란 First Input Delay의 약자로, 사용자가 페이지와 상호작용하는데 걸리는 시간을 측정하는 지표입니다.
      getFCP(onPerfEntry); // getFCP란 First Contentful Paint의 약자로, 페이지의 첫 번째 콘텐츠가 렌더링되는 시점을 측정하는 지표입니다.
      getLCP(onPerfEntry); // getLCP란 Largest Contentful Paint의 약자로, 페이지에서 가장 큰 콘텐츠가 렌더링되는 시점을 측정하는 지표입니다.
      getTTFB(onPerfEntry); // getTTFB란 Time to First Byte의 약자로, 브라우저가 서버에게 첫 번째 바이트를 요청한 시점을 측정하는 지표입니다.
    });
  }
};

export default reportWebVitals;
