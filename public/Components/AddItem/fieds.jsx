const fields = {
  title: {
    error: false,
    required: true,
    helperText: "Describe what your're selling in a few words",
    errorText: "Please enter your item title",
  },

  condition: {
    error: false,
    required: true,
    helperText: "Select a condition that fits best",
    errorText: "Please select your item condition",
  },

  category: {
    error: false,
    required: true,
    helperText: "",
    errorText: "Please select your item's category",
  },

  sub_category: {
    error: false,
    required: false,
    errorText: "",
  },

  price: {
    error: false,
    required: true,
    helperText: "Set a price per day(Set a competitive price)",
    errorText: "Please enter your price.",
  },

  location: {
    error: false,
    required: true,
    helperText: "Where the item is located",
    errorText: "Please enter your location",
  },

  terms_and_conditions: {
    error: false,
    required: true,
    helperText: "",
    errorText: "Please add your terms and conditions for your item.",
  },

  item_images: {
    error: false,
    required: true,
    helperText: "Tip add three photos",
    errorText: "You need at least one picture of your item",
  },
};

export default fields;
