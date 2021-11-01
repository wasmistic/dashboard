<script>
import countTo from "vue-count-to";
/**
 * Stat component
 */
export default {
    components: {
        countTo
    },
    data() {
        return {
             details:'',
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
            }],
            chartOptions: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    },
               
                }
            },
            growthChartOptions: {
                fill: {
                    colors: ["#f1b44c"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            orderseries: [70],
            orderRadial: {
                fill: {
                    colors: ["#34c38f"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "60%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            },
            customerseries: [55],
            customerRadial: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "60%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            }
        };
    },
   async created(){
   await fetch("https://admin.mylogisticsapp.com/engine/v1/actions/get-dashboard-stats",{
     method: "POST",
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "user_id":"1",
    "company_id":"1",
    "user_ses_id":"42931c15f19a5e7d7dbca1e5d9928e66",
    "transaction_id":"42768414848360115603",
    "mode":"web"
})
  })
    .then(response => response.json())
    .then(data =>{
    //  localStorage.removeItem('user')
    this.details=data.overall
    console.log("details",this.details)
    })
    .catch(()=>{
      this.error="Admin does not exist"
    })
   }
}
</script>

<template>
<div class="row">
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" dir="ltr" width="70" height="40" :options="chartOptions" :series="series"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        $
                        <span data-plugin="counterup">
                            <countTo :startVal="1000" :endVal="details.total_revenue" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Total Revenue</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-success me-1">
                        <i class="mdi mdi-arrow-up-bold me-1"></i>2.65%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" type="radialBar" dir="ltr" width="45" height="45" :options="orderRadial" :series="orderseries"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="100" :endVal="details.shipments" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Shipments</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>0.82%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" type="radialBar" dir="ltr" width="45" height="45" :options="customerRadial" :series="customerseries"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="1000" :endVal="details.customers" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Customers</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>6.24%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" dir="ltr" width="70" height="40" :options="growthChartOptions" :series="series"></apexchart>
                </div>
                <div>
                      <h4 class="mb-1 mt-1">
                       + <span data-plugin="counterup">
                            <countTo :startVal="1000" :endVal="details.growth" :duration="2000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Growth</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-success me-1">
                        <i class="mdi mdi-arrow-up-bold me-1"></i>10.51%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div>
    <!-- end col-->
</div>
<!-- end row-->
</template>
