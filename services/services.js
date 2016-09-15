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

})

.factory('corporateFactory', function() {

    var corpfac = {};

    var leadership = [{
            name: "Peter Pan",
            image: 'images/alberto.png',
            designation: "Chief Epicurious Officer",
            abbr: "CEO",
            description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
        }, {
            name: "Dhanasekaran Witherspoon",
            image: 'images/alberto.png',
            designation: "Chief Food Officer",
            abbr: "CFO",
            description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
        }, {
            name: "Agumbe Tang",
            image: 'images/alberto.png',
            designation: "Chief Taste Officer",
            abbr: "CTO",
            description: "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
        }, {
            name: "Alberto Somayya",
            image: 'images/alberto.png',
            designation: "Executive Chef",
            abbr: "EC",
            description: "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
        }

    ];


    return {
        leaders: function getLeaders() {
            return leadership;
        },

        leader: function getLeader(index) {
            return leadership[index];
        }

    };

});
