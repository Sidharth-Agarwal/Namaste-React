import React from "react";
import ReactDOM from "react-dom/client";

/*
High Level Layout -:

-> Header
1. Logo
2. Nav Items

-> Body
1. Search
2. Restaurant Container
    a. Restaurant Card
        i. Image
        ii. Name of the restaurant
        iii. Star Rating
        iv. cuisines
        v. delivery time
-> Footer
1. Copyright
2. Links
3. Address
4. Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// In a JSX file, inline css is using JavaScript objects
const styleCard = {
    backgroundColor:"#f0f0f0"
}

// This is the way of making a static component
// const RestaurantCard = () => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
//             <h3>Meghana Foods</h3>
//             <h4>Biryani, North Indian, Asian</h4>
//             <h4>4.3 Stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// Creating dynamic cards using props
// Here was are passing props into a react component
// These props act an object in the component

// This is called de-structing on the fly
// This method can also be used while using props
// const RestaurantCard = ({resName, cuisine, rating, delivery}) => {
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>{rating}</h4>
//             <h4>{delivery}</h4>
//         </div>
//     )
// }

// Another method
// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"/>
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>{props.rating}</h4>
//             <h4>{props.delivery}</h4>
//         </div>
//     )
// }

// This was the last body Component that was used
// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard 
//                     resName="Meghana Food" 
//                     cuisine="Biryani, North Indian, Asian" 
//                     rating="4.3" 
//                     delivery="38 minutes"
//                 />
//                 <RestaurantCard 
//                     resName="KFC" 
//                     cuisine="Burger, Fast Food" 
//                     rating="4.1" 
//                     delivery="21 minutes"
//                 />
//             </div>
//         </div>
//     )
// }

// Taking in Actual data from Swiggy to pass into props
const RestaurantCard = (props) => {
    const {resData} = props
    console.log(resData);
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' + resData.data.cloudinaryImageId}/>
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines.join(', ')}</h4>
            <h4>{resData.data.avgRating} stars</h4>
            <h4>₹{resData.data.costForTwo / 100} for two</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    )
}

const resObj = {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '121603',
      name: 'Meghana Foods',
      uuid: '51983905-e698-4e31-b0d7-e376eca56320',
      city: '1',
      area: 'Tavarekere',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
      cuisines: ['Kerala', 'Chinese'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'kannur-food-point-btm',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
      locality: 'SG Palya',
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3700,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 3700,
        message: '',
        title: 'Delivery Charge',
        amount: '3700',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '121603',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.9',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData = {resObj} />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);