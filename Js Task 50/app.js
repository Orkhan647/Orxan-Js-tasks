const prop2Taker = (obj) => {
  console.log(obj["prop-2"]);
};

prop2Taker({one:1, 'prop-2':2})
prop2Taker({  'prop-2': 'two',  prop: 'test'})
