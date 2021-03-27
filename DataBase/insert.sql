use `travelling_agency`;

-- inserting company table
insert into `company` value (1, "Travelling1", "ahmed","ebrahem",01229337950,"Tagmoo3","Egypt","","");
insert into `company` value (2, "Travelling2", "Omar","ebrahem",01229445500,"Tagmoo3","Egypt","","");
insert into `company` value (3, "Travelling3", "said","ebrahem",01222137950,"Tagmoo3","Egypt","","");
insert into `company` value (4, "Travelling3", "mohmed","ebrahem",01224337950,"Tagmoo3","Egypt","","");

Select * from company;

-- Error Code: 1136. Column count doesn't match value count at row 1

-- inserting user table
insert into `users` value (1234567, "Akram","Aziz", "akram@aucegypt.edu",01229337950, "Tagmoo3","Egypt",1,null);
insert into `users` value (09876, "youssef","Hussin", "JoCode@aucegypt.edu",01232337950, "Tagmoo3","Egypt",1,null);
insert into `users` value (5678, "Andrew","Nady", "andrew@aucegypt.edu",01209927950, "Tagmoo3","Egypt",1,null);
insert into `users` value (456789, "Salma","Soliman", "salma@aucegypt.edu",01229323950, "Tagmoo3","Egypt",0,null);

Select * from users;
-- inserting Trips table
insert into `Trips` value (1,4,1000,1,5,"", "Tagmoo3","Egypt","escape room");
insert into `Trips` value (2,3,1000,1,2,"", "dahab","Egypt","saint catrine mountain");
insert into `Trips` value (3,2,5000,1,4,"" ,"alex","Egypt","ay nela mkan");
insert into `Trips` value (4,2,3300,1,10,"" ,"hurdga","Egypt","nela mo5tlefa 3an el nela el fo2");

Select * from Trips;

-- --------------------------------- NOT DONE YET -------------------------------
-- inserting Reservation table
insert into `Reservation` value (1234567,1,"2020:9:30",0,0);
insert into `Reservation` value (1234567,2, "2020:10:2",1,0);
insert into `Reservation` value (5678,2, "2020:10:2", 0,1);
insert into `Reservation` value (09876,3, "2020:10:20", 0,1);

Select * from Reservation;
-- inserting rates table
insert into `rates` value (1234567,1, 5, "");
insert into `rates` value (09876,1, 4, "");
insert into `rates` value (5678,2, 1, "");
insert into `rates` value (5678,1, 5, "");

Select * from rates;
