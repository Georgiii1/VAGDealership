// .find() -> Loads all documents saved into the collection
db.cars.find();
db.customers.find();
db.sales.find();
db.maintenance.find();
db.location.find();

// .find({...}) -> Finds all document that corresponds to the field given
db.cars.find({ brand: "Audi" });
db.cars.find({
  $or: [
    { extras: "parktronic" },
    { "extras.comfort": "parktronic" },
    { "extras.driveassist": "parktronic" },
  ],
});
db.customers.findOne({ firstName: "Иван" });
db.maintenanceHystory.find({
  "service.serviceType": "Смяна на гуми",
});
db.sales.find({
  status: "продадена",
});
db.locations.find({
  "location.workingHours.satSun": "Отворено",
});

// find({...}, {...}) -> Fillter by several fields
db.cars.find({ type: "sedan", mileage: { $lt: 50000 } });
db.customers.find({
  activeReservation: true,
  "currentInquiry.brand": "Porsche",
});
db.maintenanceHystory.find({
  $or: [
    { "service.serviceType": "Проверка на спирачките" },
    { "service.serviceType": "Смяна на гуми" },
  ],
});
db.sales.find({ salePrice: { $lt: 25000 }, status: "очаква плащане" });
db.locations.find({
  $or: [
    { "location.address.city": "София" },
    { "location.address.city": "Пловдив" },
  ],
  "location.workTime.satSun": "Отворено",
  "services.carMaintainanceServices": "Смяна на масло",
});

// update()
db.cars.updateOne(
  { _id: ObjectId("684aa6f5652ce01bfa7edfee") },
  { $set: { price: 15000 } }
);
db.customers.updateMany(
  {
    _id: {
      $in: [
        ObjectId("684aa6f5652ce01bfa7edfee"),
        ObjectId("684aa911652ce01bfa7edffa"),
      ],
    },
  },
  { $set: { activeReservation: true } }
);
db.maintenanceHystory.updateOne(
  { _id: ObjectId("684ae087652ce01bfa7ee01c") },
  { $set: { cost: 200 } }
);
db.sales.updateOne(
  { _id: ObjectId("684add2c652ce01bfa7ee00f") },
  { $set: { warranty_years: 10 } }
);
db.locations.updateMany({}, { $set: { "workingHours.monFri": "09:00-19:00" } });

// delete()
db.cars.deleteOne({ _id: ObjectId("684aa6f5652ce01bfa7edff2") });
db.customers.deleteMany({ currentInquiry: null });
db.maintenanceHystory.deleteOne({ mileage: { $gt: 80000 } });
db.sales.deleteMany({ status: "продадена" });
db.locations.deleteOne({ "location.address.city": "Плевен" });

// AGREGATES
db.cars.aggregate({
  $group: {
    _id: "$brand",
    totalCars: { $sum: 1 },
    averagePrice: { $avg: "$price" },
    maxPrice: { $max: "$price" },
    minPrice: { $min: "$price" },
  },
});
db.cars.aggregate([
  { $match: { brand: "Audi" } },
  {
    $group: {
      _id: "$brand",
      totalCars: { $sum: 1 },
      averagePrice: { $avg: "$price" },
      maxPrice: { $max: "$price" },
      minPrice: { $min: "$price" },
    },
  },
]);
db.customers.aggregate({
  $group: {
    _id: "$activeReservation",
    totalCustomers: { $sum: 1 },
  },
});
db.sales.aggregate({
  $group: {
    _id: "$status",
    totalSales: { $sum: 1 },
  },
});
db.maintenanceHystory.aggregate({
  $group: {
    _id: "$service.serviceType",
    totalServices: { $sum: 1 },
    averageCost: { $avg: "$cost" },
  },
});
db.locations.aggregate([
  { $match: { "location.address.city": "София" } },
  {
    $group: {
      _id: "$location.address.city",
      totalLocations: { $sum: 1 },
      openLocations: {
        $sum: {
          $cond: [{ $eq: ["$location.workingHours.satSun", "Отворено"] }, 1, 0],
        },
      },
    },
  },
]);
db.maintenanceHystory.aggregate([
    {
        $group: {
            _id: "$service.serviceType",
            totalServices: { $sum: 1 },
            averageCost: { $avg: "$cost" },
        },
    },
]);
db.maintenanceHystory.aggregate([
    { $match: { "service.serviceType": "Смяна на гуми" } },
    {
        $group: {
            _id: "service.serviceType",
            totalServices: { $sum: 1 }
        }
    }
]);