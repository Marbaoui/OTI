QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function (assert) {
            var fixture = "";
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EU'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EU'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;


            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "Result : 4 (EU)");
    }
);


QUnit.test("test_computeresults_other", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EU'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EU'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "Result : 0 (EU)");
    }
);

QUnit.test("test_displayResult", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");

            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.message = "Result : 4 (EU)";
            c.displayResult(document.getElementById('res'));
            assert.equal(document.getElementById('res').innerHTML, "Result : 4 (EU)");
    }
);


QUnit.test("test_computeresult_notSameCurrency", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='3'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='DHA'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "incompatible currency : EUR with DHA");
    }
);

QUnit.test("test_simpl_subOpsOk", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='5'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='2'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "Result : 3 (EUR)");
    }
);

QUnit.test("test_computeresults_negativeValueWithSubOps", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='2'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "Negatif value: 2 with 8");
    }
);

QUnit.test("test_computeresults_Sub_DifferentDevise", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='3'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='1'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='CHF'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            assert.equal(c.message, "incompatible currency : EUR with CHF");
    }
);

QUnit.test("test_displayResult_error_deviseIncompatible", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='3'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EYR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='1'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            assert.equal(document.getElementById('res').innerHTML, '<span style="color:red">incompatible currency : EYR with EUR</span>');
    }
);

QUnit.test("test_displayResult_error_impossibleSub", function (assert) {
            var fixture = "";
            fixture += ("<div id='res'></div>");
            fixture += ("<form id='form0'>");
            fixture += ("<input type='text' id='v1' name='v1' value='3'/>");
            fixture += ("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture += ("<input type='text' id='v2' name='v2' value='8'/>");
            fixture += ("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture += ("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture += ("</form>");


            var fixtureNode = document.getElementById("qunit-fixture");
            fixtureNode.innerHTML = fixture;

            var c = new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            assert.equal(document.getElementById('res').innerHTML, '<span style="color:red">Negatif value: 3 with 8</span>');
    }
);
