QUnit.module("moneyOps", {
//	setup:function(assert){alert("setup moneyOps individual test");},
//	teardown:function(assert){alert("teardown moneyOps individual test");}
});

QUnit.test("test simple add", function(assert)
{
	assert.expect(2);

	var m1=new money(1,"EUR");
  var m2=new money(2,"EUR");
  var m3=new money(3,"EUR");

	assert.ok(m3.equals(MoneyOps.add(m1,m2)),"3e = 1e+2e");
	assert.deepEqual(m3,MoneyOps.add(m1,m2),"3e = 1e+2e deepEqual");
}
);


QUnit.test("test multi devise add", function(assert)
{
	var m1=new money(1,"EUR");
  var m2=new money(2,"CHF");
	assert.throws(function(assert) {var m3=MoneyOps.add(m1,m2)}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);



QUnit.test("test sub negatif result", function(assert)
	{
		var m1=new money(1,"EUR");
		var m2=new money(4,"EUR");
		assert.throws(function(assert) {var m3=MoneyOps.sub(m1,m2)}, SubValueNegException, "ErrorValue : m1 < m2");
	}
);

QUnit.test("test sub different currency ", function(assert)
	{
		assert.expect(1);
		var m1=new money(4,"EUR");
		var m2=new money(3,"CHF");
		assert.throws(function(assert) {var m3=MoneyOps.sub(m1,m2)}, DevisesIncompatibleExc, "incompatible currency");
	}
);

QUnit.test("test simple sub", function(assert)
	{
		assert.expect(2);
		var m1=new money(3,"EUR");
		var m2=new money(2,"EUR");
		var m3=new money(1,"EUR");
		assert.ok(m3.equals(MoneyOps.sub(m1,m2)),"1e = 3e-2e");
		assert.deepEqual(m3,MoneyOps.sub(m1,m2),"1e = 3e-2e deepEqual");
	}
);

