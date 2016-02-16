'use strict';

angular.module('webbellvnApp')
  .controller('MainCtrl', function ($scope) {

   $scope.clickMe = function (customer) {
       if(customer == null || customer =='' || customer == 'undefined')
        toastr.error("Thông tin bạn nhập vào không chính xác!!!");
       else{
           toastr.info("Thông tin của bạn đã được gửi!!!");
           $scope.customer.name = ''
           $scope.customer.sdt = ''
           $scope.customer.home = ''
       }
   };
  });
