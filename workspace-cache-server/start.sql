CREATE DATABASE starterkitcache;
CREATE TABLE setvalue(id int serial primary key, newvalue integer, tx text unique, sender text)
