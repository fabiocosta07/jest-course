const { fetchData, fetchDataPromise, fetchDataPromiseReject } = require('./index')

//async using done
test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });

//promises resolve
test('the data is peanut butter', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});


//promises reject + test number of assertions
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch(e => expect(e).toMatch('error'));
});

//promises - uses the resolve matcher
test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

//promises - uses the rejects mather
test('the fetch fails with an error', () => {
  return expect(fetchDataPromiseReject()).rejects.toMatch('error');
});


//promises - using async await
test('the data is peanut butter', async () => {
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

//promises - using async await + resolve, reject
test('the data is peanut butter', async () => {
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataPromiseReject()).rejects.toMatch('error');
});