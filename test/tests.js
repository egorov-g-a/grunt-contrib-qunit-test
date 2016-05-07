
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


QUnit.test("Test function trim", function(assert){
	var res = trim(" hello world ");
	assert.equal(res,"hello world","Passed!");
});