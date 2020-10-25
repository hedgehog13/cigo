create table orders (
id bigint not null auto_increment primary key,
first_name varchar(50) not null,
last_name varchar(50) null,
customer_data json null,
scheduled_date date not null,
last_updated timestamp not null default current_timestamp,
status_id int default 0
);


delimiter //
create procedure pInsertOrder
(
in p_first_name varchar(50),
in p_last_name varchar(50),
in p_scheduled_date date,
in p_customer_data json,
out p_order_id int
)
begin
	insert into orders (first_name, last_name, customer_data, scheduled_date)
	values (p_first_name, p_last_name, p_customer_data, p_scheduled_date);
set p_order_id = last_insert_id();
end;
delimiter ;


delimiter //
create procedure pUpdateOrder
(
in p_order_id int,
in p_status int
)
begin
	update orders
	set status_id = p_status,
	last_updated = CURRENT_TIMESTAMP()
	where id = p_order_id;
end;
delimiter ;


delimiter //
create procedure pGetOrders()
begin
	select id, first_name, last_name, scheduled_date, status_id
	from orders
	order by  scheduled_date DESC;
end;
delimiter ;



delimiter //
create procedure pDeleteOrder
	(
		in p_order_id int
	)
begin
	delete 
	from orders
	where id = p_order_id;
end;
delimiter ;


