drop database if exists `travelling_agency`;

create database if not exists `travelling_agency`;

use `travelling_agency`;

create table if not exists company (
comp_id BIGINT primary key not null auto_increment, 
comp_name varchar(50) not null,
representative_fame varchar(15) not null,
representative_lname varchar(15) not null,
Tele_number BIGINT not null,
city varchar(20) not null, 
country varchar(20) not null,
street varchar(100), 
address varchar(100)
);
 create table if not exists	users (
user_id  BIGINT primary key not null auto_increment, 
user_fname   varchar(20) not null,
user_lname   varchar(20) not null,
mail  varchar(100) not null,
tele_number BIGINT not null,
city varchar(20), 
country varchar(20),
boy bool not null,
BD date 
 );
 
 create table if not exists	Trips (
trip_id  BIGINT primary key not null auto_increment,
comp_id BIGINT not null,
price int not null,
days int not null,#in days
hours int not null,#in hours
descri text,
city varchar(20) not null,  #dahab
country varchar(20)not null, #egypt
visited_place varchar(200) not null, # saint catrine mountain
  foreign key (comp_id) references company (comp_id)
 );
 
  create table if not exists Trips_photos (
  trip_id  BIGINT not null ,
  photo longblob not null,
  photo_id BIGINT,
  constraint Trips_photos_Pk primary key (trip_id,photo_id),
  foreign key (trip_id) references Trips (trip_id)
  );


  create table if not exists Reservation(
  user_id  BIGINT not null, 
  trip_id  BIGINT not null,
  D date not null,
  done bool not null,
  cancelled bool not null,
   constraint Reservation_Pk primary key (user_id,trip_id),
    foreign key (user_id) references users (user_id) ,
   foreign key (trip_id) references Trips (trip_id)
  );
   create table if not exists  rates (
     user_id  BIGINT not null,
     comp_id BIGINT not null,
     stars int not null,
     descri text,
    constraint Reservation_Pk primary key (user_id,comp_id),
       foreign key (user_id) references users (user_id) ,
   foreign key (comp_id) references company (comp_id)
   
   );



 