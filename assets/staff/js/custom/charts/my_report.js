
$(window).on("load", function () {
    var a = $("#initial_submission_chart");
    new Chart(a, {
        type: "pie",
        options: { responsive: !0, maintainAspectRatio: !1, responsiveAnimationDuration: 500 },
        data: { labels: ["Not Sent To IRB", "Pending", "Submitted", "On Review", "Reviewed", "On Comment", "Approved", "Rejected"],
                datasets: [ 
                            {   label: "Initial Submission Data", 
                                data: prop_data,
                                backgroundColor: ["#d7a9e6", "#ebdd40", "#69d695", "#749fe0", "#8871e4", "#FFA87D","#16D39A", "#e7727d" ] 
                            }
                        ] 
            },
    });
    
});

$(window).on("load", function () {
    var a = $("#amendment_chart");
    new Chart(a, {
        type: "pie",
        options: { responsive: !0, maintainAspectRatio: !1, responsiveAnimationDuration: 500 },
        data: { labels: ["Pending", "Submitted", "On Review", "Reviewed", "On Comment", "Approved", "Rejected"],
                datasets: [ 
                            {   label: "Amendment Data", 
                                data: amend_data,
                                backgroundColor: ["#ebdd40", "#69d695", "#749fe0", "#8871e4", "#FFA87D","#16D39A", "#e7727d" ] 
                            }
                        ] 
            },
    });
    
});
$(window).on("load", function () {
    var a = $("#renewal_chart");
    new Chart(a, {
        type: "pie",
        options: { responsive: !0, maintainAspectRatio: !1, responsiveAnimationDuration: 500 },
        data: { labels: ["Pending", "Submitted", "On Review", "Reviewed", "Approved", "Rejected"],
                datasets: [ 
                            {   label: "Amendment Data", 
                                data: renewal_data, 
                                backgroundColor: ["#ebdd40", "#69d695", "#749fe0", "#8871e4", "#16D39A", "#e7727d" ] 
                            }
                        ] 
            },
    });
    
});

