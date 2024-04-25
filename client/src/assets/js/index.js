document.addEventListener('DOMContentLoaded', function () {
    function setupThemeToggle() {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        var themeToggleBtn = document.getElementById('theme-toggle');

        // Check if all elements exist
        if (themeToggleDarkIcon && themeToggleLightIcon && themeToggleBtn) {

            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('color-theme') === 'dark' || 
                (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }

            themeToggleBtn.addEventListener('click', function () {
                // Toggle icons inside button
                themeToggleDarkIcon.classList.toggle('hidden');
                themeToggleLightIcon.classList.toggle('hidden');

                // If set via local storage previously
                if (localStorage.getItem('color-theme')) {
                    if (localStorage.getItem('color-theme') === 'light') {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    }
                // If NOT set via local storage previously
                } else {
                    if (document.documentElement.classList.contains('dark')) {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    } else {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    }
                }
            });
        } else {
            console.error('One or more elements are missing! Retrying...');
            setTimeout(setupThemeToggle, 100);  // Retry after 100ms
        }
    }

    setupThemeToggle();


    // const options = {
    //     chart: {
    //       height: "100%",
    //       maxWidth: "100%",
    //       type: "area",
    //       fontFamily: "Inter, sans-serif",
    //       dropShadow: {
    //         enabled: false,
    //       },
    //       toolbar: {
    //         show: false,
    //       },
    //     },
    //     tooltip: {
    //       enabled: true,
    //       x: {
    //         show: false,
    //       },
    //     },
    //     fill: {
    //       type: "gradient",
    //       gradient: {
    //         opacityFrom: 0.55,
    //         opacityTo: 0,
    //         shade: "#1C64F2",
    //         gradientToColors: ["#1C64F2"],
    //       },
    //     },
    //     dataLabels: {
    //       enabled: false,
    //     },
    //     stroke: {
    //       width: 6,
    //     },
    //     grid: {
    //       show: false,
    //       strokeDashArray: 4,
    //       padding: {
    //         left: 2,
    //         right: 2,
    //         top: 0
    //       },
    //     },
    //     series: [
    //       {
    //         name: "New users",
    //         data: [6500, 6418, 6456, 6526, 6356, 6456],
    //         color: "#1A56DB",
    //       },
    //     ],
    //     xaxis: {
    //       categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    //       labels: {
    //         show: false,
    //       },
    //       axisBorder: {
    //         show: false,
    //       },
    //       axisTicks: {
    //         show: false,
    //       },
    //     },
    //     yaxis: {
    //       show: false,
    //     },
    //   }
      
    //   if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
    //     const chart = new ApexCharts(document.getElementById("area-chart"), options);
    //     chart.render();
    //   }

    var options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'sales',
          data: [30,40,35,50,49,60,70,91,125]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        }
      }
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();

});
