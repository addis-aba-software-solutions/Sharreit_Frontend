exports.fields = {
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
        required: false,
        errorText: ""
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

exports.options = {
    conditions: ["Condition 1", "Condition 2", "Condition 3", "Condition 4"],
    category: ["Category 1", "Category 2", "Category 3", "Category 4"],
    sub_category: ["Sub Category 1", "Sub Category 2", "Sub Category 3", "Sub Category 4"],
    location: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
}

exports.categories = [
    "Products",
    "Services",
    "Digital"
]

exports.subCategories = {
    [this.categories[0]]: [
        "Textbooks", "Power Tools", "Music Instruments", "Photography / Videography Instruments",
        "Luggage", "Camping Gear", "Pool Supplies", "Construction Equipments", "Farming Equipments",
        "Ladder", "Office Space", "Storage Space"
    ],

    [this.categories[1]]: [
        "Nanny", "Tutors", "Music Tutors", "Personal Trainer", "Personal Drivers", "Cleaners"
    ],

    [this.categories[2]]: [
        "Season Tickets", "Subscription Services"
    ]
}