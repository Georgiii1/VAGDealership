// CARS
const cars = [
  {
    _id: ObjectId("684aa6f5652ce01bfa7edfee"),
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2021,
    type: "hatchback",
    fuel: "petrol",
    transmission: "automatic",
    color: "red",
    mileage: 17000,
    price: 27000,
    available: true,
    extras: ["parktronic", "climatronic", "automated side mirrors"],
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edfef"),
    brand: "Audi",
    model: "A4",
    year: 2020,
    type: "sedan",
    fuel: "diesel",
    transmission: "automatic",
    color: "black",
    mileage: 30000,
    price: 32000,
    available: true,
    extras: {
      comfort: ["climatronic", "seat heating and cooling"],
      driveassist: ["parktronic", "lane following", "autopilot"],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff0"),
    brand: "Škoda",
    model: "Octavia",
    year: 2022,
    type: "wagon",
    fuel: "petrol",
    transmission: "manual",
    color: "silver",
    mileage: 12000,
    price: 24000,
    available: true,
    extras: {
      comfort: [],
      driveassist: [],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff1"),
    brand: "SEAT",
    model: "Leon",
    year: 2021,
    type: "hatchback",
    fuel: "petrol",
    transmission: "automatic",
    color: "blue",
    mileage: 15000,
    price: 21000,
    available: true,
    extras: {
      comfort: [],
      driveassist: [],
    },
  },
  //   SOLD
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff2"),
    brand: "Porsche",
    model: "Taycan",
    year: 2023,
    type: "sedan",
    fuel: "electric",
    transmission: "automatic",
    color: "white",
    mileage: 5000,
    price: 95000,
    available: false,
    extras: {
      comfort: ["climatronic", "seat heating and cooling"],
      driveassist: ["parktronic", "autopilot"],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff3"),
    brand: "Volkswagen",
    model: "Passat",
    year: 2019,
    type: "sedan",
    fuel: "diesel",
    transmission: "automatic",
    color: "grey",
    mileage: 45000,
    price: 23000,
    available: true,
    extras: {
      comfort: ["climatronic"],
      driveassist: ["parktronic"],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff4"),
    brand: "Audi",
    model: "Q5",
    year: 2022,
    type: "SUV",
    fuel: "petrol",
    transmission: "automatic",
    color: "green",
    mileage: 10000,
    price: 45000,
    available: true,
    extras: {
      comfort: ["Full set"],
      driveassist: ["Full set"],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff5"),
    brand: "SEAT",
    model: "Arona",
    year: 2020,
    type: "SUV",
    fuel: "petrol",
    transmission: "manual",
    color: "orange",
    mileage: 25000,
    price: 19000,
    available: true,
    extras: {
      comfort: [],
      driveassist: [],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff6"),
    brand: "Cupra",
    model: "Formentor",
    year: 2023,
    type: "crossover",
    fuel: "petrol",
    transmission: "automatic",
    color: "matte blue",
    mileage: 7000,
    price: 42000,
    available: true,
    extras: {
      comfort: [],
      driveassist: [],
    },
  },
  {
    _id: ObjectId("684aa6f5652ce01bfa7edff7"),
    brand: "Škoda",
    model: "Kodiaq",
    year: 2021,
    type: "SUV",
    fuel: "diesel",
    transmission: "automatic",
    color: "black",
    mileage: 20000,
    price: 35000,
    available: true,
    extras: {
      comfort: ["climatronic"],
      driveassist: ["parktronic"],
    },
  },
];

// CUSTOMERS
const customers = [
  {
    _id: ObjectId("684aa911652ce01bfa7edff8"),
    firstName: "Иван",
    lastName: "Петров",
    age: 35,
    phone: "+359888123456",
    email: "ivan.petrov@example.com",
    customerSince: 2023,
    activeReservation: true,
    preferredBrands: ["Audi", "Volkswagen", "Škoda"],
    previousCars: ["Opel Astra", "Peugeot 308"],
    address: {
      city: "София",
      street: "ул. Българска роза 15",
      postalCode: "1000",
    },
    currentInquiry: {
      brand: "Audi",
      model: "Q5",
      maxPrice: 45000,
      colorPreference: ["black", "grey"],
    },
  },
  {
    _id: ObjectId("684aa911652ce01bfa7edff9"),
    firstName: "Мария",
    lastName: "Георгиева",
    age: 29,
    phone: "+359889987654",
    email: "maria.g@example.com",
    customerSince: 2019,
    activeReservation: false,
    preferredBrands: ["Cupra", "SEAT"],
    previousCars: [],
    address: {
      city: "Пловдив",
      street: "бул. Васил Априлов 100",
      postalCode: "4000",
    },
    currentInquiry: null,
  },
  {
    _id: ObjectId("684aa911652ce01bfa7edffa"),
    firstName: "Георги",
    lastName: "Илиев",
    age: 42,
    phone: "+359878112233",
    email: "g.iliev@domain.bg",
    customerSince: 2025,
    activeReservation: true,
    preferredBrands: ["Porsche"],
    previousCars: ["Audi A6", "Volkswagen Passat", "Škoda Superb"],
    address: {
      city: "Варна",
      street: "ул. Морска звезда 5",
      postalCode: "9000",
    },
    currentInquiry: {
      brand: "Porsche",
      model: "Taycan",
      fuel: "electric",
      maxMileage: 10000,
    },
  },
  {
    _id: ObjectId("684aa911652ce01bfa7edffb"),
    firstName: "Елена",
    lastName: "Стефанова",
    age: 31,
    phone: "+359882665544",
    email: "elena.stefanova@gmail.com",
    customerSince: 2021,
    activeReservation: false,
    preferredBrands: ["Volkswagen", "SEAT"],
    previousCars: ["Ford Focus"],
    address: {
      city: "Бургас",
      street: "ул. Тракия 8",
      postalCode: "8000",
    },
    currentInquiry: null,
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7edffc"),
    firstName: "Асен",
    lastName: "Христов",
    age: 33,
    phone: "+359886556677",
    email: "assen.h@gmail.com",
    customerSince: 2024,
    activeReservation: true,
    preferredBrands: ["SEAT", "Škoda"],
    previousCars: ["SEAT Ibiza", "Škoda Fabia"],
    address: {
      city: "Плевен",
      street: "ул. Христо Ботев 12",
      postalCode: "5800",
    },
    currentInquiry: {
      brand: "Škoda",
      model: "Octavia",
      maxPrice: 25000,
    },
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7edffd"),
    firstName: "Теодора",
    lastName: "Милева",
    age: 30,
    phone: "+359889112233",
    email: "teodora.m@abv.bg",
    customerSince: 2022,
    activeReservation: false,
    preferredBrands: ["Volkswagen", "Audi"],
    previousCars: ["Volkswagen Polo"],
    address: {
      city: "София",
      street: "ул. Искър 20",
      postalCode: "1000",
    },
    currentInquiry: null,
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7edffe"),
    firstName: "Мартин",
    lastName: "Божилов",
    age: 41,
    phone: "+359888443322",
    email: "martin.bozhilov@domain.bg",
    customerSince: 2023,
    activeReservation: true,
    preferredBrands: ["Porsche"],
    previousCars: ["Audi Q7", "Volkswagen Touareg"],
    address: {
      city: "Стара Загора",
      street: "ул. Генерал Столетов 4",
      postalCode: "6000",
    },
    currentInquiry: {
      brand: "Porsche",
      model: "Taycan",
      fuel: "electric",
    },
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7edfff"),
    firstName: "Ралица",
    lastName: "Ганева",
    age: 28,
    phone: "+359888776655",
    email: "ralica.ganeva@gmail.com",
    customerSince: 2020,
    activeReservation: false,
    preferredBrands: ["Cupra"],
    previousCars: [],
    address: {
      city: "Благоевград",
      street: "ул. Славянска 17",
      postalCode: "2700",
    },
    currentInquiry: null,
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7ee000"),
    firstName: "Светлин",
    lastName: "Иванов",
    age: 36,
    phone: "+359885998877",
    email: "svetlio@iv.bg",
    customerSince: 2021,
    activeReservation: true,
    preferredBrands: ["Audi", "Volkswagen"],
    previousCars: ["Audi A3", "Volkswagen Golf"],
    address: {
      city: "Шумен",
      street: "ул. Панайот Волов 9",
      postalCode: "9700",
    },
    currentInquiry: {
      brand: "Audi",
      model: "A4",
      colorPreference: ["white", "black"],
    },
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7ee001"),
    firstName: "Десислава",
    lastName: "Попова",
    age: 34,
    phone: "+359887111222",
    email: "desi.popova@example.com",
    customerSince: 2019,
    activeReservation: false,
    preferredBrands: ["Škoda", "Volkswagen"],
    previousCars: ["Škoda Superb"],
    address: {
      city: "Видин",
      street: "ул. Дунавска 1",
      postalCode: "3700",
    },
    currentInquiry: null,
  },
  {
    _id: ObjectId("684aaa13652ce01bfa7ee002"),
    firstName: "Красимир",
    lastName: "Колев",
    age: 39,
    phone: "+359888888888",
    email: "krasi.kolev@auto.bg",
    customerSince: 2025,
    activeReservation: true,
    preferredBrands: ["SEAT", "Cupra"],
    previousCars: ["SEAT Leon", "Cupra Formentor"],
    address: {
      city: "Перник",
      street: "ул. Юрий Гагарин 10",
      postalCode: "2300",
    },
    currentInquiry: {
      brand: "Cupra",
      model: "Formentor",
      maxPrice: 40000,
      colorPreference: ["matte blue"],
    },
  },
];

// MAINTENANCE HYSTORY
const maintenanceHystory = [
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee018",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edfef",
    },
    serviceDate: {
      $date: "2024-11-01T08:00:00.000Z",
    },
    service: {
      serviceType: "Смяна на масло",
      notes: "Сменени масло и маслен филтър. Следващ преглед: 20.05.26",
    },
    cost: 200,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee019",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff0",
    },
    serviceDate: {
      $date: "2024-11-01T08:00:00.000Z",
    },
    service: {
      serviceType: "Рутинен преглед",
      notes: "Всичко е нормално! Следващ преглед: 20.05.26",
    },
    cost: 50,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01a",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff2",
    },
    serviceDate: {
      $date: "2024-11-01T08:00:00.000Z",
    },
    service: {
      serviceType: "Диагностика на електрониката",
      notes: "Сменен GPS модул! Следващ преглед: 20.05.26",
    },
    cost: 250,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01b",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff3",
    },
    serviceDate: {
      $date: "2024-11-01T08:00:00.000Z",
    },
    service: {
      serviceType: "Смяна на гуми",
      notes: "Сменени четирите гуми с летни! Следващ преглед: 10.05.26",
    },
    cost: 450,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01c",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff7",
    },
    serviceDate: {
      $date: "2025-01-15T10:30:00.000Z",
    },
    service: {
      serviceType: "Проверка на спирачките",
      notes: "Задните накладки износени и сменени. Следващ преглед: 20.07.25",
    },
    cost: 180,
    mileage: 75200,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01d",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff6",
    },
    serviceDate: {
      $date: "2025-02-10T09:15:00.000Z",
    },
    service: {
      serviceType: "Смяна на акумулатор",
      notes:
        "Старият акумулатор сменен поради труден старт. Следващ преглед: 20.08.25",
    },
    cost: 220,
    mileage: 66340,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01e",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff5",
    },
    serviceDate: {
      $date: "2025-03-20T11:45:00.000Z",
    },
    service: {
      serviceType: "Почистване на климатичната система",
      notes:
        "Сменен филтър на купето, почистени въздуховоди. Следващ преглед: 20.09.25",
    },
    cost: 100,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee01f",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edfee",
    },
    serviceDate: {
      $date: "2025-04-05T13:00:00.000Z",
    },
    service: {
      serviceType: "Проверка на окачването",
      notes: "Сменени предни втулки на окачването. Следващ преглед: 20.10.25",
    },
    cost: 320,
    mileage: 89500,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee020",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff5",
    },
    serviceDate: {
      $date: "2024-11-01T08:00:00.000Z",
    },
    service: {
      serviceType: "Смяна на гуми",
      notes: "Сменени четирите гуми с летни! Следващ преглед: 20.05.26",
    },
    cost: 250,
    mileage: 1900,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee021",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edfef",
    },
    serviceDate: {
      $date: "2024-12-11T17:00:00.000Z",
    },
    service: {
      serviceType: "Диагностика на електрониката",
      notes: "Сменен GPS модул! Следващ преглед: 20.05.26",
    },
    cost: 250,
  },
  {
    _id: {
      $oid: "684ae087652ce01bfa7ee022",
    },
    carId: {
      $oid: "684aa6f5652ce01bfa7edff0",
    },
    serviceDate: {
      $date: "2025-04-15T10:30:00.000Z",
    },
    service: {
      serviceType: "Проверка на спирачките",
      notes: "Задните накладки износени и сменени. Следващ преглед: 20.07.25",
    },
    cost: 180,
    mileage: 75200,
  },
];

// SALES
const sales = [
  {
    _id: ObjectId("684add2c652ce01bfa7ee00e"),
    carId: ObjectId("684aa6f5652ce01bfa7edfee"),
    customerId: ObjectId("684aa911652ce01bfa7edff8"),
    saleDate: new Date("2025-06-10T00:00:00.000Z"),
    salePrice: 17900,
    salesperson: "Георги Петров",
    paymentMethod: "Банков Превод",
    status: "продадена",
    warranty_years: 4,
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee00f"),
    carId: ObjectId("684aa6f5652ce01bfa7edfef"),
    customerId: ObjectId("684aa911652ce01bfa7edff9"),
    saleDate: new Date("2025-06-12T00:00:00.000Z"),
    salePrice: 26500,
    salesperson: "Борислав Димитров",
    paymentMethod: "На изплащане",
    status: "очаква плащане",
    warranty_years: 4,
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee010"),
    carId: ObjectId("684aa6f5652ce01bfa7edff0"),
    customerId: ObjectId("684aa911652ce01bfa7edffa"),
    saleDate: new Date("2025-06-09T00:00:00.000Z"),
    salePrice: 18500,
    salesperson: "Иванка Николова",
    paymentMethod: "Кеш",
    status: "очаква плащане",
    warranty_years: 1,
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee011"),
    carId: ObjectId("684aa6f5652ce01bfa7edff1"),
    customerId: ObjectId("684aa911652ce01bfa7edffb"),
    saleDate: new Date("2025-06-02T00:00:00.000Z"),
    salePrice: 29800,
    salesperson: "Александър Михайлов",
    paymentMethod: "Банков превод",
    status: "очаква плащане",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee012"),
    carId: ObjectId("684aa6f5652ce01bfa7edff2"),
    customerId: ObjectId("684aaa13652ce01bfa7edffc"),
    saleDate: new Date("2025-05-30T00:00:00.000Z"),
    salePrice: 17600,
    salesperson: "Теодора Желева",
    paymentMethod: "Кеш",
    status: "очаква плащане",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee013"),
    carId: ObjectId("684aa6f5652ce01bfa7edff3"),
    customerId: ObjectId("684aaa13652ce01bfa7edffd"),
    saleDate: new Date("2025-06-08T00:00:00.000Z"),
    salePrice: 54000,
    salesperson: "Радослав Колев",
    paymentMethod: "Банков превод",
    status: "очаква плащане",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee014"),
    carId: ObjectId("684aa6f5652ce01bfa7edff4"),
    customerId: ObjectId("684aaa13652ce01bfa7edffe"),
    saleDate: new Date("2025-06-10T00:00:00.000Z"),
    salePrice: 17900,
    salesperson: "Георги Петров",
    paymentMethod: "Банков превод",
    status: "очаква плащане",
    warranty_years: 10,
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee015"),
    carId: ObjectId("684aa6f5652ce01bfa7edff5"),
    customerId: ObjectId("684aaa13652ce01bfa7ee000"),
    saleDate: new Date("2025-05-28T00:00:00.000Z"),
    salePrice: 23400,
    salesperson: "Мария Тодорова",
    paymentMethod: "Кеш",
    status: "продадена",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee016"),
    carId: ObjectId("684aa6f5652ce01bfa7edff6"),
    customerId: ObjectId("684aaa13652ce01bfa7ee001"),
    saleDate: new Date("2025-06-01T00:00:00.000Z"),
    salePrice: 32500,
    salesperson: "Иван Иванов",
    paymentMethod: "На изплащане",
    status: "очаква плащане",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee017"),
    carId: ObjectId("684aa6f5652ce01bfa7edff7"),
    customerId: ObjectId("684aaa13652ce01bfa7ee002"),
    saleDate: new Date("2025-06-05T00:00:00.000Z"),
    salePrice: 45000,
    salesperson: "Николай Василев",
    paymentMethod: "Банков превод",
    status: "продадена",
  },
  {
    _id: ObjectId("684add2c652ce01bfa7ee018"),
    carId: ObjectId("684aa911652ce01bfa7edff8"),
    customerId: ObjectId("684aa6f5652ce01bfa7edff0"),
    saleDate: new Date("2025-06-11T00:00:00.000Z"),
    salePrice: 19200,
    salesperson: "Десислава Георгиева",
    paymentMethod: "Кеш",
    status: "в процес",
  },
];

// LOCATIONS
const locations = [
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee023",
    },
    location: {
      address: {
        street: "ул. „Проф. Цветан Лазаров“",
        number: 23,
        city: "София",
        zip: "1582",
      },
      coordinates: {
        latitude: 42.67,
        longitude: 23.334,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Volkswagen", "Audi", "Škoda"],
      carMaintainanceServices: [
        "Смяна на масло",
        "Диагностика",
        "Смяна на спирачни дискове",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee024",
    },
    location: {
      address: {
        street: "бул. „Руски“",
        number: 101,
        city: "Пловдив",
        zip: "4000",
      },
      coordinates: {
        latitude: 42.1427,
        longitude: 24.7497,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Volkswagen", "SEAT", "Audi"],
      carMaintainanceServices: [
        "Рутинен преглед",
        "Смяна на филтри",
        "Проверка на окачване",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee025",
    },
    location: {
      address: {
        street: "ул. „Отец Паисий“",
        number: 8,
        city: "Варна",
        zip: "9000",
      },
      coordinates: {
        latitude: 43.21,
        longitude: 27.911,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Škoda", "Volkswagen", "Audi"],
      carMaintainanceServices: [
        "Компютърна диагностика",
        "Проверка на фарове",
        "Реглаж на преден мост",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee026",
    },
    location: {
      address: {
        street: "бул. „Стефан Стамболов“",
        number: 55,
        city: "Бургас",
        zip: "8000",
      },
      coordinates: {
        latitude: 42.5,
        longitude: 27.467,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Audi", "Volkswagen", "Porsche"],
      carMaintainanceServices: [
        "Смяна на гуми",
        "Зареждане на климатик",
        "Смяна на акумулатор",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee027",
    },
    location: {
      address: {
        street: "ул. „Гео Милев“",
        number: 14,
        city: "Русе",
        zip: "7000",
      },
      coordinates: {
        latitude: 43.8514,
        longitude: 25.9703,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Volkswagen", "Škoda"],
      carMaintainanceServices: [
        "Смяна на ремъци",
        "Смяна на масло в скоростна кутия",
        "Почистване на ЕГР клапан",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee027",
    },
    location: {
      address: {
        street: "ул. „Гео Милев“",
        number: 14,
        city: "Русе",
        zip: "7000",
      },
      coordinates: {
        latitude: 43.8514,
        longitude: 25.9703,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Volkswagen", "Škoda"],
      carMaintainanceServices: [
        "Смяна на ремъци",
        "Смяна на масло в скоростна кутия",
        "Почистване на ЕГР клапан",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee028",
    },
    location: {
      address: {
        street: "ул. „Христо Смирненски“",
        number: 88,
        city: "Стара Загора",
        zip: "6000",
      },
      coordinates: {
        latitude: 42.4243,
        longitude: 25.6345,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Отворени",
      },
    },
    services: {
      carBrands: ["Audi", "SEAT", "Volkswagen"],
      carMaintainanceServices: [
        "Смяна на свещи",
        "Проверка на спирачна система",
        "Диагностика на електроника",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee028",
    },
    location: {
      address: {
        street: "ул. „Христо Смирненски“",
        number: 88,
        city: "Стара Загора",
        zip: "6000",
      },
      coordinates: {
        latitude: 42.4243,
        longitude: 25.6345,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Отворени",
      },
    },
    services: {
      carBrands: ["Audi", "SEAT", "Volkswagen"],
      carMaintainanceServices: [
        "Смяна на свещи",
        "Проверка на спирачна система",
        "Диагностика на електроника",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee029",
    },
    location: {
      address: {
        street: "бул. „Данаил Попов“",
        number: 60,
        city: "Плевен",
        zip: "5800",
      },
      coordinates: {
        latitude: 43.4174,
        longitude: 24.616,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Отворени",
      },
    },
    services: {
      carBrands: ["Volkswagen", "Škoda", "SEAT"],
      carMaintainanceServices: [
        "Смяна на съединител",
        "Проверка на лагери",
        "Почистване на климатик",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee02a",
    },
    location: {
      address: {
        street: "ул. „Генерал Гурко“",
        number: 17,
        city: "Велико Търново",
        zip: "5000",
      },
      coordinates: {
        latitude: 43.0834,
        longitude: 25.67,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Отворено",
      },
    },
    services: {
      carBrands: ["Volkswagen", "Audi", "Porsche"],
      carMaintainanceServices: [
        "Общо обслужване",
        "Смяна на тампони",
        "Технически преглед",
      ],
    },
  },
  {
    _id: {
      $oid: "684ae9a4652ce01bfa7ee02b",
    },
    location: {
      address: {
        street: "ул. „Цар Освободител“",
        number: 91,
        city: "Благоевград",
        zip: "2700",
      },
      coordinates: {
        latitude: 42.0151,
        longitude: 23.0911,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Отворено",
      },
    },
    services: {
      carBrands: ["Audi", "Volkswagen", "Škoda"],
      carMaintainanceServices: [
        "Проверка на спирачна течност",
        "Смяна на горивен филтър",
        "Проверка на инжектори",
      ],
    },
  },
  {
    _id: {
      $oid: "684aea9d652ce01bfa7ee02c",
    },
    location: {
      address: {
        street: "ул. „Владово“",
        number: 18,
        city: "София",
        zip: "1000",
      },
      coordinates: {
        latitude: 42.0151,
        longitude: 23.0911,
      },
      workingHours: {
        monFri: "08:00-18:00",
        satSun: "Затворено",
      },
    },
    services: {
      carBrands: ["Audi", "Volkswagen", "Škoda"],
      carMaintainanceServices: [
        "Проверка на спирачна течност",
        "Смяна на горивен филтър",
        "Проверка на инжектори",
      ],
    },
  },
];
