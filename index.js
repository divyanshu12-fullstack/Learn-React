import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Item
 * Body
 * - Search Item
 *  - Restaurnt Item
 *      -img
 *      -name of rest, star rating, cuisine etc 
 * Footer
 * - CopyRight
 * - Contact Info
 */

const restaurantsList = [
    {
        "info": {
            "id": "226044",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/cf070431-66f9-46d7-8a1e-8b8a6fa77412_226044.jpg",
            "locality": "City Mall",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.4,
            "parentId": "166",
            "avgRatingString": "4.4",
            "totalRatingsString": "14K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/burger-king-city-mall-gomti-nagar-rest226044",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "59255",
            "name": "Madhurima Veg",
            "cloudinaryImageId": "y4cn67prvzexwqkoqasp",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian",
                "South Indian",
                "Chinese",
                "Snacks",
                "Thalis",
                "Continental"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "7799",
            "avgRatingString": "4.5",
            "totalRatingsString": "47K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Thali.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Thali.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹75 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "7.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/madhurima-veg-gomti-nagar-rest59255",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "819610",
            "name": "Kwality Walls Ice Cream and More",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/d6beab4b-6a2f-49bb-b1c3-6b302bf501f3_819610.JPG",
            "locality": "Bara Bharwara",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.7",
            "totalRatingsString": "152",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/kwality-walls-ice-cream-and-more-bara-bharwara-gomti-nagar-rest819610",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "775572",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/0e39461b-1712-4938-bd73-e55ea9d1cff5_775572.jpg",
            "locality": "Gomti Nagar",
            "areaName": "VIBHUTI KHAND",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "975",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/theobroma-gomti-nagar-vibhuti-khand-rest775572",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "288400",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/4e7c2a55-be4a-4119-b67f-f7cb5a113f63_288400.JPG",
            "locality": "Vibhuti Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "195515",
            "avgRatingString": "4.4",
            "totalRatingsString": "2.7K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹145"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/starbucks-coffee-vibhuti-khand-gomti-nagar-rest288400",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "648199",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/8e62d147-b1f5-4829-a4b3-228c5204e60d_648199.JPG",
            "locality": "Vardhan Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "bolt/big%20RX%20listing%2018px.png",
                        "description": "bolt!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "bolt!",
                                    "imageId": "bolt/big%20RX%20listing%2018px.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹53"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/kfc-vardhan-khand-gomti-nagar-rest648199",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "253733",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/0b1912c1-0c25-487d-b7aa-fc0b34bbb69c_253733.JPG",
            "locality": "West End Mall",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.5,
            "parentId": "630",
            "avgRatingString": "4.5",
            "totalRatingsString": "20K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹49"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/mcdonalds-west-end-mall-gomti-nagar-rest253733",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "59505",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/c89b7fd8-e6d1-4b76-9c15-24537f30373c_59505.JPG",
            "locality": "Patrakar Puram",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.3,
            "parentId": "2",
            "avgRatingString": "4.3",
            "totalRatingsString": "7.8K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/subway-patrakar-puram-gomti-nagar-rest59505",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "367778",
            "name": "Burger Singh(Big Punjabi Burgers)",
            "cloudinaryImageId": "972a37599772cdc7df93a0855ad87591",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Beverages",
                "Desserts",
                "Snacks",
                "Indian"
            ],
            "avgRating": 4.3,
            "parentId": "375065",
            "avgRatingString": "4.3",
            "totalRatingsString": "8.4K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 05:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "247"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/burger-singh-big-punjabi-burgers-gomti-nagar-rest367778",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "312150",
            "name": "Keventers - Milkshakes & Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/22/af1257e3-8a92-4b61-8339-7b64b0835f5b_312150.jpg",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Beverages",
                "Ice Cream",
                "Desserts",
                "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "268997",
            "avgRatingString": "4.6",
            "totalRatingsString": "476",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "370"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/keventers-milkshakes-and-desserts-gomti-nagar-rest312150",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "722841",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Viraj Khand",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.4K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/chinese-wok-viraj-khand-gomti-nagar-rest722841",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "689752",
            "name": "Rominus Pizza And Burger",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/e43f134b-2c2b-480f-8e6b-41eba37e657b_689752.jpg",
            "locality": "Nagar Nigam Food Safety  Zone-14",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian-American",
                "Italian",
                "American",
                "Desserts",
                "Beverages",
                "Fast Food",
                "Snacks",
                "Continental",
                "Bakery"
            ],
            "avgRating": 4.5,
            "parentId": "8387",
            "avgRatingString": "4.5",
            "totalRatingsString": "7.1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹19"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/rominus-pizza-and-burger-nagar-nigam-food-safety-zone-14-gomti-nagar-rest689752",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "59517",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/ea8c0a23-50b3-4237-8486-12c52cf13be7_59517.JPG",
            "locality": "Patrakar Puram",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.6K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/baskin-robbins-ice-cream-desserts-patrakar-puram-gomti-nagar-rest59517",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "625181",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/45cbe97c-449b-4453-8429-2ad61abc3363_625181.JPG",
            "locality": "Ahmad Kidwai Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.4,
            "parentId": "721",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/pizza-hut-ahmad-kidwai-nagar-gomti-nagar-rest625181",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "577118",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/79f29b85-df99-4040-a564-4c6a9f10dfd6_577118.JPG",
            "locality": "Antas Mall",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "2456",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/dominos-pizza-antas-mall-gomti-nagar-rest577118",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "76685",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "djvcuphs4igsdrxklwjk",
            "locality": "Gomti Nagar",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4961",
            "avgRatingString": "4.3",
            "totalRatingsString": "27K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Pizza.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹100"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "1.2K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/la-pinoz-pizza-gomti-nagar-rest76685",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "824600",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/4/e2cf18bd-0ffb-4016-b36f-226a5342184c_824600.jpg",
            "locality": "SECTOR 7",
            "areaName": "PALASSIO MALL",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.6",
            "totalRatingsString": "218",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-27 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/the-belgian-waffle-co-sector-7-palassio-mall-rest824600",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "262054",
            "name": "Wow! Momo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/5d2a6939-61bf-41c8-a442-273783185ea9_262054.jpg",
            "locality": "Phoenix Plassio Mall",
            "areaName": "Gomti Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "fastfood",
                "Asian",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "1776",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.4K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Chinese.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/wow-momo-phoenix-plassio-mall-gomti-nagar-rest262054",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "238589",
            "name": "The Good Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/54098535-eada-408d-8fac-a94d29d42b2e_238589.jpg",
            "locality": "Gomti Nagar",
            "areaName": "Kamta",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "7918",
            "avgRatingString": "4.5",
            "totalRatingsString": "2.3K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/the-good-bowl-gomti-nagar-kamta-rest238589",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "238588",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/9c362998-d7dd-4e28-9d33-232ad6390e55_238588.jpg",
            "locality": "Gomti Nagar",
            "areaName": "Kamta",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Bakery",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "4444",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-05-26 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "FREE DELIVERY"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8575ed5a-10ad-457f-9ed9-6cd22464f6f1"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/lucknow/sweet-truth-cake-and-desserts-gomti-nagar-kamta-rest238588",
            "type": "WEBLINK"
        }
    }
]
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://img.freepik.com/premium-vector/food-drink-company-logo-template_1286368-96890.jpg?semt=ais_hybrid&w=740"
                    alt="app logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const ReasturantCard = (props) => {
    const { restaurant } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = restaurant?.info;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                    + cloudinaryImageId
                }
                alt="reasturant logo"
            />
            <h3>{name}</h3>
            <hr />
            <h4>{"Cuisines: " + cuisines.join(", ")}</h4>
            <h4>{"Overall Rating: " + avgRating + "/5"}</h4>
            <h4>{"Cost for Two: " + costForTwo}</h4>
            <h4>{"ETA: " + sla.deliveryTime + "minutes"} </h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {restaurantsList.map((soloElement) => (
                    <ReasturantCard restaurant={soloElement} key={soloElement.info.id} />
                ))}
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);