
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 4444,
    years: 4,
    rate: 4.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('101.14');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 4394,
    years: 4,
    rate: 4.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00');
});

