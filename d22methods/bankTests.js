"use strict";
/* global assert bank */

/* comment out the following for the browser */
// const bank = myExports.bank;  //do this for all of the functions used in the Mocha tests
// const bankBalance = myExports.bankBalance;

describe("bank tests", function () {

    it("checks initial balance", function () {
        assert.strictEqual(bank.bankBalance(), 85);
    });

    it("balance after credit of 20 and debit of 1000", function () {
        assert.strictEqual(bank.bankBalance(), 105);
        bank.credit(1, 20);
        bank.debit(1, 1000);
        //assert.strictEqual(bank.bankBalance(), 105);

    });

});
