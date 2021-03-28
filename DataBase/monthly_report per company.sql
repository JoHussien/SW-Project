
SELECT sum(T.price), Avg(T.price),month(R.D) as "Month"
from company as c
join trips as T on T.comp_id=c.comp_id
join Reservation as R on T.trip_id =R.trip_id
where c.comp_name=""
group by R.D;


