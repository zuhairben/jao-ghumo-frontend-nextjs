interface attraction {
    name: String,
    city: String,
    state: String,
    type: String,
    country: String,
    description: String,
    phone: String,
    address: String,
    website: String,
    position: Number,
    features: String,
    timeOpen: String,
    priceRange: Number,
    rating: Number,
    numberOfReviews: Number,
    owner: String,
    reviews: review[],
    is_deleted: Boolean,
    is_active: Boolean,
    deleted_by: String,
    deletion_time: String,
    creation_time: String,
    updated_by: String,
    updation_time: String,
}