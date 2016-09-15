'use strict';

angular.module('ticketPortal')
    .constant("ticketListActiveClass", "btn btn-block btn-success btn-lg")

.controller('ticketListCtrl', ['$scope', 'ticketFactory', 'ticketListActiveClass', function($scope, ticketFactory, ticketListActiveClass) {

    var selectedCategory = null;
    $scope.selectedPage = 1;

    $scope.selectDepartment = function(newCategory) {
        selectedCategory = newCategory;
        $scope.selectedPage = 1;
    }
    $scope.selectPage = function(newPage) {
        $scope.selectedPage = newPage;
    }
    $scope.categoryFilterFn = function(product) {
        return selectedCategory == null ||
            product.currentDepartmentId == selectedCategory;
    }
    $scope.getDepartmentClass = function(category) {
        return selectedCategory == category ? ticketListActiveClass : "btn btn-block btn-default btn-lg";
    }



    $scope.tickets = ticketFactory.getTickets();
    var addSlaTime = function() {
        var numberOfDaysToAdd = $scope.tickets.map(function(item) {
            if (item.prioritySLA == "High") {
                return 1
            } else if (item.prioritySLA == "Medium") {
                return 3
            }
            if (item.prioritySLA == "Low") {
                return 7
            }
        });

        for (var i = 0; i < $scope.tickets.length; i++) {
            $scope.tickets[i].slaTime = "";
            $scope.tickets[i].slaTime = numberOfDaysToAdd[i];
        }
    }
    addSlaTime();

    $scope.date = new Date();

    var newTicket = {
        id: ($scope.tickets.length + 1).toString(),
        subject: "",
        dateCreated: new Date().toISOString(),
        prioritySLA: "",
        description: "",
        ticketOwner: "",
        currentDepartmentId: "",
        creatorTypeId: "",
        status: "Open"
    };
    $scope.submitticket = function(ticket) {
        newTicket.subject = ticket.subject;
        newTicket.prioritySLA = ticket.prioritySLA;
        newTicket.description = ticket.description;
        newTicket.ticketOwner = ticket.ticketOwner;
        newTicket.currentDepartmentId = ticket.currentDepartmentId;
        newTicket.creatorTypeId = ticket.creatorTypeId;


        $scope.tickets.push(newTicket);
        addSlaTime();
        $scope.ticketForm.$setPristine();

        newTicket = {
            id: ($scope.tickets.length + 1).toString(),
            subject: "",
            dateCreated: new Date().toISOString(),
            prioritySLA: "",
            description: "",
            ticketOwner: "",
            currentDepartmentId: "",
            creatorTypeId: "",
            status: "Open"
        };

        $scope.ticket = newTicket;
    }
}]);
