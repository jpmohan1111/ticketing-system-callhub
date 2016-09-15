'use strict';

angular.module('ticketPortal')

.service('ticketFactory', function($http) {

    var tickets = [{
            subject: "Product Description",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "High",
            description: "The product description has been incorrectly specified.",
            ticketOwner: "David",
            currentDepartmentId: "Marketing",
            creatorTypeId: "Customer",
            status: "Open",
            id: "1"
        },

        {
            subject: "System Not booting up",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "Medium",
            description: "My system is not booting up properly.",
            ticketOwner: "Lehnan",
            currentDepartmentId: "5",
            creatorTypeId: "User",
            currentDepartmentId: "IT",
            status: "Closed",
            id: "2"
        },

        {
            currentDepartmentId: "Sales",
            subject: "Sales data mismatch",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "High",
            description: "There is huge data mismatch between sales data and actual sale.",
            ticketOwner: "Mann",
            creatorTypeId: "User",
            status: "Closed",
            id: "3"
        },

        {
            subject: "Leave not actioned",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "Medium",
            description: "My leave request for date:20th-Sept-2016 is not actioned.",
            ticketOwner: "Joseph",
            currentDepartmentId: "HR",
            creatorTypeId: "User",
            status: "Pending",
            id: "4"
        },

        {
            subject: "Salary slip discrepency",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "High",
            description: "There is a mistake in HRA allowance in my latest salary slip.",
            ticketOwner: "Ujain",
            currentDepartmentId: "Finance",
            creatorTypeId: "User",
            status: "Pending",
            id: "5"
        },

        {
            currentDepartmentId: "Media",
            subject: "Ad mistake",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "Low",
            description: "There is an mistake in the product's latest ad on TV.",
            ticketOwner: "Ram",
            creatorTypeId: "User",
            status: "Open",
            id: "6"
        },

        {
            subject: "Admin site hanging",
            dateCreated: "2015-02-04T05:49:33.190Z",
            prioritySLA: "High",
            description: "The admin panel is not loading since morning",
            ticketOwner: "Quinn",
            currentDepartmentId: "IT",
            creatorTypeId: "Admin",
            status: "Open",
            id: "7"
        }
    ];

    this.getTickets = function() {
        return tickets;
    };
});