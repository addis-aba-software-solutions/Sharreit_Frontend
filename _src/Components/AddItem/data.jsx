export const fields = {
    title: {
        error: false,
        required: true,
        helperText: "Describe what your're selling in a few words",
        errorText: "Please enter your item title"
    },

    condition: {
        error: false,
        required: true,
        helperText: "Select a condition that fits best",
        errorText: "Please select your item condition"
    },

    category: {
        error: false,
        required: true,
        helperText: "",
        errorText: "Please select your item's category"
    },

    sub_category: {
        error: false,
        required: true,
        errorText: "Please insert your item's sub category"
    },

    price: {
        error: false,
        required: true,
        helperText: "Set a price per day(Set a competitive price)",
        errorText: "Please enter your price."
    },

    location: {
        error: false,
        required: true,
        helperText: "Where the item is located",
        errorText: "Please enter your location"
    },
    
    terms_and_conditions: {
        error: false,
        required: true,
        helperText: "",
        errorText: "Please add your terms and conditions for your item."
    },

    item_images: {
        error: false,
        required: true,
        helperText: "Tip add three photos",
        errorText: "You need at least one picture of your item"
    }
}

export const options = {
    conditions: ["New", "Barely Used", "Used"],
    location: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
}

export const categories = [
    "Products", "Services", "Digital"
]

export const subCategories = {
    [categories[0]]: [
        "Textbooks", "Power Tools", "Music Instruments", "Photography / Videography Instruments",
        "Luggage", "Camping Gear", "Pool Supplies", "Construction Equipments", "Farming Equipments",
        "Ladder", "Office Space", "Storage Space"
    ],

    [categories[1]]: [
        "Nanny", "Tutors", "Music Tutors", "Personal Trainer", "Personal Drivers", "Cleaners"
    ],

    [categories[2]]: [
        "Season Tickets", "Subscription Services"
    ]
}