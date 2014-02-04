timing_test(function() {
  at(0.5, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 40, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0.75, 24)'},
       {'transform':'matrix(1, 0, 0, 1, 120, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 120.75, 24)'},
       {'transform':'matrix(1, 0, 0, 1, 2.25, 72)'},
       {'transform':'matrix(1, 0, 0, 1, 42.25, 72)'},
       {'transform':'matrix(0.9762960071199334, 0.21643961393810288, -0.21643961393810288, 0.9762960071199334, 0, 0)'},
       {'transform':'matrix(0.7316888688738209, 0.6816387600233341, -0.6816387600233341, 0.7316888688738209, 0, 0)'},
       {'transform':'matrix(0.7071067811865476, 0.7071067811865475, -0.7071067811865475, 0.7071067811865476, 0, 0)'},
       {'transform':'matrix(0.7933533402912352, 0.6087614290087207, -0.6087614290087207, 0.7933533402912352, 0, 0)'},
       {'transform':'matrix(0.16553242255542416, 0.9862043485418894, -0.9862043485418894, 0.16553242255542416, 0, 0)'},
       {'transform':'matrix(0.1305261922200517, 0.9914448613738104, -0.9914448613738104, 0.1305261922200517, 0, 0)'},
       {'transform':'matrix(-0.6281736227227395, 0.778073196887921, -0.778073196887921, -0.6281736227227395, 0, 0)'},
       {'transform':'matrix(-0.781689261992281, 0.62366809898051, -0.62366809898051, -0.781689261992281, 0, 0)'},
       {'transform':'matrix(-0.9943666621687136, 0.1059950053891757, -0.1059950053891757, -0.9943666621687136, 0, 0)'},
       {'transform':'matrix(-0.7071067811865475, 0.7071067811865476, -0.7071067811865476, -0.7071067811865475, 0, 0)'},
       {'transform':'matrix(-0.8433914458128857, 0.5372996083468238, -0.5372996083468238, -0.8433914458128857, 0, 0)'},
       {'transform':'matrix(-0.9993735504314827, 0.035390771367304535, -0.035390771367304535, -0.9993735504314827, 0, 0)'},
       {'transform':'matrix(1, 0, -3.380515006246586, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, 0.15838444032453627, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -0.8559934009085187, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, -0.6143216646333806, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, 0.5095254494944288, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, -1.0545577214842652, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.07870170682461844, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.6483608274590866, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.24007875908011603, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 1.0522267420378377, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -6.405331196646276, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -4.20622653616987, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.15838444032453627, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -0.6143216646333806, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.5095254494944288, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -1.0545577214842652, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
  at(1, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 80, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 1.5, 48)'},
       {'transform':'matrix(1, 0, 0, 1, 80, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 81.5, 48)'},
       {'transform':'matrix(1, 0, 0, 1, 1.5, 48)'},
       {'transform':'matrix(1, 0, 0, 1, 81.5, 48)'},
       {'transform':'matrix(0.9063077870366499, 0.42261826174069944, -0.42261826174069944, 0.9063077870366499, 0, 0)'},
       {'transform':'matrix(0.0707372016677029, 0.9974949866040544, -0.9974949866040544, 0.0707372016677029, 0, 0)'},
       {'transform':'matrix(0.00000000000000006123031769111886, 1, -1, 0.00000000000000006123031769111886, 0, 0)'},
       {'transform':'matrix(0.9063077870366499, 0.42261826174069944, -0.42261826174069944, 0.9063077870366499, 0, 0)'},
       {'transform':'matrix(-0.35744992062904685, 0.9339323070984792, -0.9339323070984792, -0.35744992062904685, 0, 0)'},
       {'transform':'matrix(-0.42261826174069933, 0.90630778703665, -0.90630778703665, -0.42261826174069933, 0, 0)'},
       {'transform':'matrix(0.0707372016677029, 0.9974949866040544, -0.9974949866040544, 0.0707372016677029, 0, 0)'},
       {'transform':'matrix(-0.35744992062904685, 0.9339323070984792, -0.9339323070984792, -0.35744992062904685, 0, 0)'},
       {'transform':'matrix(-0.9974949866040544, 0.07073720166770342, -0.07073720166770342, -0.9974949866040544, 0, 0)'},
       {'transform':'matrix(0.00000000000000006123031769111886, 1, -1, 0.00000000000000006123031769111886, 0, 0)'},
       {'transform':'matrix(-0.42261826174069933, 0.90630778703665, -0.90630778703665, -0.42261826174069933, 0, 0)'},
       {'transform':'matrix(-0.9974949866040544, 0.07073720166770342, -0.07073720166770342, -0.9974949866040544, 0, 0)'},
       {'transform':'matrix(1, 0, 0.6483608274590866, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.6483608274590866, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 1.2330389177361016, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 1.2330389177361016, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.15838444032453627, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.15838444032453627, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 3.7101784049164297, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 3.7101784049164297, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.3249196962329063, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.6483608274590866, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 1.2330389177361016, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.3249196962329063, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 1.2330389177361016, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
  at(1.5, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 120, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 2.25, 72)'},
       {'transform':'matrix(1, 0, 0, 1, 40, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 42.25, 72)'},
       {'transform':'matrix(1, 0, 0, 1, 0.75, 24)'},
       {'transform':'matrix(1, 0, 0, 1, 120.75, 24)'},
       {'transform':'matrix(0.7933533402912352, 0.6087614290087207, -0.6087614290087207, 0.7933533402912352, 0, 0)'},
       {'transform':'matrix(-0.6281736227227395, 0.778073196887921, -0.778073196887921, -0.6281736227227395, 0, 0)'},
       {'transform':'matrix(-0.7071067811865475, 0.7071067811865476, -0.7071067811865476, -0.7071067811865475, 0, 0)'},
       {'transform':'matrix(0.9762960071199334, 0.21643961393810288, -0.21643961393810288, 0.9762960071199334, 0, 0)'},
       {'transform':'matrix(-0.781689261992281, 0.62366809898051, -0.62366809898051, -0.781689261992281, 0, 0)'},
       {'transform':'matrix(-0.8433914458128857, 0.5372996083468238, -0.5372996083468238, -0.8433914458128857, 0, 0)'},
       {'transform':'matrix(0.7316888688738209, 0.6816387600233341, -0.6816387600233341, 0.7316888688738209, 0, 0)'},
       {'transform':'matrix(0.16553242255542416, 0.9862043485418894, -0.9862043485418894, 0.16553242255542416, 0, 0)'},
       {'transform':'matrix(-0.9993735504314827, 0.035390771367304535, -0.035390771367304535, -0.9993735504314827, 0, 0)'},
       {'transform':'matrix(0.7071067811865476, 0.7071067811865475, -0.7071067811865475, 0.7071067811865476, 0, 0)'},
       {'transform':'matrix(0.1305261922200517, 0.9914448613738104, -0.9914448613738104, 0.1305261922200517, 0, 0)'},
       {'transform':'matrix(-0.9943666621687136, 0.1059950053891757, -0.1059950053891757, -0.9943666621687136, 0, 0)'},
       {'transform':'matrix(1, 0, -0.8559934009085187, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, 0.5095254494944288, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -3.380515006246586, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, -1.0545577214842652, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, 0.15838444032453627, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, -0.6143216646333806, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.24007875908011603, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -6.405331196646276, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.07870170682461844, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -4.20622653616987, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.6483608274590866, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 1.0522267420378377, 1, 0, 0)'},
       {'transform':'matrix(1, -0.8559934009085187, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.5095254494944288, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -3.380515006246586, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -1.0545577214842652, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.15838444032453627, 0, 1, 0, 0)'},
       {'transform':'matrix(1, -0.6143216646333806, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
  at(2, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 160, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 3, 96)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 3, 96)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 160, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0.7265425280053609, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0.7265425280053609, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -1.117214930923896, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -1.117214930923896, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.7265425280053609, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.7265425280053609, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
  at(2.5, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 160, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 3, 96)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 3, 96)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 160, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-1, 0.00000000000000012246063538223773, -0.00000000000000012246063538223773, -1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(0.6427876096865394, 0.766044443118978, -0.766044443118978, 0.6427876096865394, 0, 0)'},
       {'transform':'matrix(-0.9899924966004454, 0.1411200080598672, -0.1411200080598672, -0.9899924966004454, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0.7265425280053609, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0.7265425280053609, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 2.237160944224742, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -1.117214930923896, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, -1.117214930923896, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0.3249196962329063, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.7265425280053609, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0.7265425280053609, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 2.237160944224742, 0, 1, 0, 0)'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");
