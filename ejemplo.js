request('url1', () => {
  ....
  request('url2', () => { 
    ... 
    request('url3', () => { 
      ...
    }
  });
}));
