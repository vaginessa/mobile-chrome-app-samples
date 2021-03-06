timing_test(function() {
  at(0, function() {
    assert_styles(
      '.anim',
      [{'left':'100px'},
       {'left':'100px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");

//pause
  at(1, function() {
    assert_styles(
      '.anim',
      [{'left':'138.46153259277344px'},
       {'left':'140px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(2, function() {
    assert_styles(
      '.anim',
      [{'left':'138.46153259277344px'},
       {'left':'140px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");
//unpause
  at(3, function() {
    assert_styles(
      '.anim',
      [{'left':'176.92308044433594px'},
       {'left':'180px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");
//pause
  at(4, function() {
    assert_styles(
      '.anim',
      [{'left':'200px'},
       {'left':'200px'},
       {'left':'116px'},
       {'left':'117.39130401611328px'}]);
  }, "Autogenerated");
  at(5, function() {
    assert_styles(
      '.anim',
      [{'left':'200px'},
       {'left':'200px'},
       {'left':'116px'},
       {'left':'117.39130401611328px'}]);
  }, "Autogenerated");
//unpause
  at(6, function() {
    assert_styles(
      '.anim',
      [{'left':'200px'},
       {'left':'200px'},
       {'left':'156px'},
       {'left':'160.86956787109375px'}]);
  }, "Autogenerated");
  at(7, function() {
    assert_styles(
      '.anim',
      [{'left':'200px'},
       {'left':'200px'},
       {'left':'196px'},
       {'left':'200px'}]);
  }, "Autogenerated");
  at(7.1, function() {
    assert_styles(
      '.anim',
      [{'left':'200px'},
       {'left':'200px'},
       {'left':'200px'},
       {'left':'200px'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");
