<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Profile component
 */
export default {
    components: {Layout,PageHeader },
    props:['id'],
     page: {
    title: "Rider nProfile",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
    data() {
        return {
            title: "Rider Profile",
              center: { 
                    lat: 39.7837304,
                    lng: -100.4458825
                    },
            locationMarkers: [],
            locPlaces: [],
            items: [{
                    text: "Orbeet",
                },
                {
                    text: "Rider Profile",
                    active: true,
                },
            ],
            all_shipping:[],
        };
    },
  methods:{
        initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
  }
    
    
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-4">
        <div class="col-xl-4">
            <div class="card h-100">
                <div class="card-body">
                    <div class="text-center">
                        <b-dropdown class="float-end" variant="white" right menu-class="dropdown-menu-end" toggle-class="font-size-16 text-body p-0">
                            <template v-slot:button-content>
                                <i class="uil uil-ellipsis-v"></i>
                            </template>
                            <a class="dropdown-item" href="#">Reset Password</a>
                            <a class="dropdown-item" href="#">Suspend /Activate Rider</a>
                            <a class="dropdown-item" href="#">Delete Rider</a>
                        </b-dropdown>
                        <div class="clearfix"></div>
                        <div>
                            <img src="@/assets/images/users/avatar-4.jpg" alt class="avatar-lg rounded-circle img-thumbnail" />
                        </div>
                        <h5 class="mt-3 mb-1">Rido Namo</h5>
                        <!-- <p class="text-muted">UI/UX Designer</p> -->

                        <!-- <div class="mt-4">
                            <button type="button" class="btn btn-light btn-sm">
                                <i class="uil uil-envelope-alt me-2"></i> Message
                            </button>
                        </div> -->
                    </div>

                    <hr class="my-4" />

                    <div class="text-muted">
                        <h5 class="font-size-16">Current Location</h5>
                        <p>Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.</p>
                        <div class="table-responsive mt-4 mb-0">
                            <div>
                                <p class="mb-1">Current Destination :</p>
                                <h5 class="font-size-16">Marcus</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">Estimate Time of Arrival :</p>
                                <h5 class="font-size-16">012-234-5678</h5>
                            </div>
                            <div class="mt-4">
                                <p class="mb-1">Last Update:</p>
                                <h5 class="font-size-16">marcus@minible.com</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-8">
            <div class="card mb-0">
                <b-tabs content-class="p-4" justified class="nav-tabs-custom">
                    <b-tab active>
                        <template v-slot:title>
                            <i class="uil uil-user-circle font-size-20"></i>
                            <span class="d-none d-sm-block">Route</span>
                        </template>
                        <div>
                            <div>
                                <h5 class="font-size-16 mb-4">Projects</h5>

                                <div class="table-responsive">
                                    <table class="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Timestamp</th>
                                                <th scope="col">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">01</th>
                                                <td>
                                                    <a href="#" class="text-dark">Brand Logo Design</a>
                                                </td>
                                                <td>18 Jun, 2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02</th>
                                                <td>
                                                    <a href="#" class="text-dark">Minible Admin</a>
                                                </td>
                                                <td>06 Jun, 2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-clipboard-notes font-size-20"></i>
                            <span class="d-none d-sm-block">Activities</span>
                        </template>
                         <div>
                                <h5 class="font-size-16 mb-4">Experience</h5>

                                <ul class="activity-feed mb-0 ps-2">
                                    <li class="feed-item">
                                        <div class="feed-item-list">
                                            <p class="text-muted mb-1">2019 - 2020</p>
                                            <h5 class="font-size-16">UI/UX Designer</h5>
                                            <p>Abc Company</p>
                                            <p class="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
                                        </div>
                                    </li>
                                    <li class="feed-item">
                                        <div class="feed-item-list">
                                            <p class="text-muted mb-1">2017 - 2019</p>
                                            <h5 class="font-size-16">Graphic Designer</h5>
                                            <p>xyz Company</p>
                                            <p class="text-muted">It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </b-tab>
                    <b-tab>
                        <template v-slot:title>
                            <i class="uil uil-envelope-alt font-size-20"></i>
                            <span class="d-none d-sm-block">Track</span>
                        </template>
                        <div>
                            <div class="card">
                                <div class="card-body">
                                    <gmap-map
                                        :zoom="14"    
                                        :center="center"
                                        style="width:100%;  height: 406px;"
                                    >
                                    <gmap-marker
                                        :key="index"
                                        v-for="(m, index) in locationMarkers"
                                        :position="m.position"
                                        @click="center=m.position"
                                    ></gmap-marker>
                                    </gmap-map>
                                </div>
                            </div>
                            <!-- end .border-->
                        </div>
                    </b-tab>
                </b-tabs>
                <!-- Nav tabs -->
                <!-- Tab content -->
            </div>
        </div>
    </div>
    <!-- end row -->
</Layout>
</template>
