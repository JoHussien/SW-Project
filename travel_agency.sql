drop database if exists `travelling_agency`;

create database if not exists `travelling_agency`;

use `travelling_agency`;

create table if not exists company (
comp_id BIGINT primary key,
comp_name varchar(50),
representative_fame varchar(15),
representative_lname varchar(15),
Tele_number BIGINT,
city varchar(20), 
country varchar(20),
street varchar(100), 
address varchar(100)
);
 create table if not exists	users (
national_id  BIGINT primary key,
user_fname   varchar(20),
user_lname   varchar(20),
mail  varchar(100),
tele_number BIGINT,
city varchar(20), 
country varchar(20),
boy bool,
BD date
 );
 
 create table if not exists	Trips (
trip_id  BIGINT primary key,
comp_id BIGINT,
price int,
days int,#in days
hours int,#in hours
descri text,
city varchar(20), 
country varchar(20),
visited_place varchar(200) not null, # saint catrine mountain
  foreign key (comp_id) references company (comp_id)
 );

  create table if not exists Reservation(
  national_id  BIGINT, 
  trip_id  BIGINT ,
  D date,
  done bool,
  cancelled bool,
   constraint Reservation_Pk primary key (national_id,trip_id),
    foreign key (national_id) references users (national_id) ,
   foreign key (trip_id) references Trips (trip_id)
  );
   create table if not exists  rates (
     national_id  BIGINT ,
     comp_id BIGINT,
     stars int,
     descri text,
    constraint Reservation_Pk primary key (national_id,comp_id),
       foreign key (national_id) references users (national_id) ,
   foreign key (comp_id) references company (comp_id)
   
   );



 