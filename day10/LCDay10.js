//leetcode-2665
var createCounter = function(init) {
    let presentCount = init;

      function increment() {
          return ++presentCount;
            }

              function decrement() {
                    return --presentCount;
                      }

                        function reset() {
                              return (presentCount = init);
                                }

                                  return { increment, decrement, reset };
                                  };

//leetcode-2635
var map = function (a, fn) {
    let an = new Array(a.length);
    a.forEach((e, i) => {
        an[i] = fn(e, i);
    });
    return an;
};