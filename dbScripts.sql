
--local on windows
--download psql on your local machine 
--execute the exe file and install 
--to start server use : pg_ctl -D "C:\Program Files\PostgreSQL\13\data" start
--to stop server use : pg_ctl -D "C:\Program Files\PostgreSQL\13\data" stop
--to restart server use : pg_ctl -D "C:\Program Files\PostgreSQL\13\data" restart

create database spendwise;

create type transactiontype as enum ('CREDIT', 'DEBIT');

create table transactions (
    id serial4 not null,
    amount int4 not null,
    trx_type transactiontype Default 'DEBIT' not null 
);

